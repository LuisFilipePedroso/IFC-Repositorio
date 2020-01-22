<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PesquisaController extends Controller
{
    /**
     * Tipos de requests possíveis
     */
    const REQUEST_NOME = 1;
    const REQUEST_FILTRO = 2;
    const REQUEST_INVALIDO = 3;
    const REQUEST_VAZIO = 4;

    public function pesquisar()
    {
        $client = new \GuzzleHttp\Client([
            'base_uri' => 'localhost:3333',
            'timeout'  => 2.0,
        ]);

        // Gera os filtros
        $filtros = self::gerarFiltros();

        // Request apenas com o paramêtro nome
        if ($filtros[0] === self::REQUEST_NOME) {
            echo 'APENAS O NOME';
        }
        // Request vazio
        if ($filtros[0] === self::REQUEST_VAZIO) {
            echo 'VAZIO';
        }
        // Erro ao montar filtros
        if ($filtros[0] === self::REQUEST_INVALIDO) {
            echo 'ERRO AO MONTAR FILTROS';
        }

        // Monta a tabela de filtros
        $filtros = $filtros[1];
        $tabela = self::montarFiltros($filtros);

        // Organiza os filtros de acordo com prioridade de busca
        $filtros = self::organizaFiltros($filtros);
        
        // Busca todos os trabalhos
        $response = $client->request('GET', '/articles');
        $trabalhos = json_decode($response->getBody(), true);

        // Aplica o filtro de titulo se existir e depois e filtro de data se existir
        $trabalhos = self::aplicaFiltrosTituloData($filtros, $trabalhos);

        // // Busca os usuários de cada artigo
        // foreach ($trabalhos as &$trabalho) {
        //     $trabalho['usuarios'] = self::getUsersFromArticle($client, $trabalho['id']);
        // }
        
        
        // Aplicar os filtros nos trabalhos
        // var_dump($trabalhos);
                // // Exemplo de busca com case insensitive
        // $a = "Mathias Artur Schulz";
        // $b = "m";
        // if (stripos($a, $b) !== false) {
        //     echo "nice one";
        //     echo stripos($a, $b);
        // }
        
        
        
        // $pesquisa = "TESTE";
        // return view(
            //     'pesquisa', 
        //     compact('pesquisa', 'tabela', 'trabalhos')
        // );

        // EXEMPLO URL:
        // http://localhost:8000/pesquisa?filtro_campo=autor&filtro_comparacao=igual&filtro_texto=Mathias+Artur+Schulz&filtro_campo=titulo&filtro_comparacao=contem&filtro_texto=Intelig%C3%AAncia+Artificial&filtro_campo=data_publicacao&filtro_comparacao=contem&filtro_texto=2017-2019
        
    }

    /**
     * Busca todos os usuários de um artigo
     * Retorna um array com os nomes dos usuários
     */
    private function getUsersFromArticle($client, $id)
    {
        $response = $client->request('GET', '/usersarticles');
        $todosUsuarios = json_decode($response->getBody());

        // Busca os usuários do artigo
        $usuarios = [];
        foreach ($todosUsuarios as $usuario) {
            if ($usuario->article_id == $id) {
                $usuarios[] = $usuario->Users[0]->firstname
                        . ' ' . $usuario->Users[0]->lastname;
            }
        }

        return $usuarios;
    }

    /**
     * Método responsável por montar os filtros e verificar se estão montados corretamente
     */
    private function gerarFiltros()
    {
        $request = self::getRequestGet();
        
        // Request proveniente de busca, com apenas request 'nome'
        if ($request[0][0] === "nome") {
            return [self::REQUEST_NOME, ['nome' => $request[0][1]]];
        }

        // Nenhum paramêtro na requisição
        if (!$request) {
            return [self::REQUEST_VAZIO, ''];
        }
        
        $filtros = self::montaFiltros($request);
        if ($filtros[0] === self::REQUEST_INVALIDO) {
            return $filtros;
        }
        
        $result = self::validaFiltros($filtros[1]);
        if ($result[0] === self::REQUEST_INVALIDO) {
            return $result;
        }
        return [self::REQUEST_FILTRO, $filtros[1]];
    }

    /**
     * Método responsável por ler o request GET e retornar os parâmetros
     */
    private function getRequestGet()
    {
        if (!isset($_SERVER['QUERY_STRING'])) {
            return false;
        }
        $request = $_SERVER['QUERY_STRING'];
        $request = urldecode($request);
        $request = explode("&", $request);
        $filtros = [];
        foreach ($request as $key => $value) {
            $filtros[] = explode("=", $value);
        }
        return $filtros;
    }

    /**
     * Método responsável por verificar se o request possui filtros válidos
     * e montar os filtros
     */
    private function montaFiltros($request)
    {
        $filtros = [];
        for ($i = 0; $i < count($request); $i++) { 
            if (
                isset($request[$i]) &&
                isset($request[$i+1]) &&
                isset($request[$i+2]) &&
                isset($request[$i][0]) &&
                isset($request[$i+1][0]) &&
                isset($request[$i+2][0]) &&
                isset($request[$i][1]) &&
                isset($request[$i+1][1]) &&
                isset($request[$i+2][1]) &&
                $request[$i][0]   === "filtro_campo" &&
                $request[$i+1][0] === "filtro_comparacao" &&
                $request[$i+2][0] === "filtro_texto"
            ) {
                $filtros[] = [
                    'campo'      => $request[$i][1],
                    'comparacao' => $request[$i+1][1],
                    'texto'      => $request[$i+2][1]
                ];
            } else {
                return [
                    self::REQUEST_INVALIDO, 'Não foi possível realizar a montagem dos filtros. Filtros incorretos!'
                ];
            }
            $i = $i + 2;
        }
        return [true, $filtros];
    }

    /**
     * Método responsável por validar se cada filtro foi preenchido corretamente
     */
    private function validaFiltros($filtros)
    {
        $tiposFiltrosCampo = ["titulo", "autor", "assunto", "data_publicacao"];
        $tiposFiltrosComparacao = ["contem", "igual", "nao_contem"];

        for ($i = 0; $i < count($filtros); $i++) {
            $element = $filtros[$i];

            if (
                !in_array($element["campo"], $tiposFiltrosCampo) ||
                !in_array($element["comparacao"], $tiposFiltrosComparacao)
            ) {
                return [self::REQUEST_INVALIDO, 'Não foi possível realizar a montagem dos filtros. Tipo campo ou comparação inválido!'];
            }
            // Validação especial para o tipo data
            if ($element["campo"] === $tiposFiltrosCampo[3]) {
                // Permitido apenas: XXXX (Ex: 2020) ou XXXX-XXXX (2017-2020)
                $pattern = "/^[0-9]{4}(\-[0-9]{4}|)$/";
                $resultado = preg_match($pattern, $element["texto"], $matches);
                if (!$resultado) {
                    return [self::REQUEST_INVALIDO, 'Não foi possível realizar a montagem dos filtros. Data incorreta!'];
                }
            }
        };
        return [true, ''];
    }

    /**
     * Método responsável por montar a tabela de filtros da página
     */
    private function montarFiltros($filtros)
    {
        $tabela = "";
        foreach ($filtros as $key => $filtro) {
            $tabela .= ""
                . "\n<tr>"
                . "\n\t<td>"
                . "\n\t\t<select class=\"custom-select mr-sm-2\" name=\"filtro_campo\">"
                . "\n\t\t<option value=\"titulo\" "          . (($filtro["campo"] == "titulo") ? "selected" : "") . ">Título</option>"
                . "\n\t\t<option value=\"autor\" "           . (($filtro["campo"] == "autor") ? "selected" : "") . ">Autor</option>"
                . "\n\t\t<option value=\"assunto\" "         . (($filtro["campo"] == "assunto") ? "selected" : "") . ">Assunto</option>"
                . "\n\t\t<option value=\"data_publicacao\" " . (($filtro["campo"] == "data_publicacao") ? "selected" : "") . ">Data de publicação</option>"
                . "\n\t\t</select>"
                . "\n\t</td>"
                . "\n\t<td>"
                . "\n\t\t<select class=\"custom-select mr-sm-2\" name=\"filtro_comparacao\">"
                . "\n\t\t<option value=\"contem\""     . (($filtro["comparacao"] == "contem") ? "selected" : "") . ">Contém</option>"
                . "\n\t\t<option value=\"igual\""      . (($filtro["comparacao"] == "igual") ? "selected" : "") . ">Igual</option>"
                . "\n\t\t<option value=\"nao_contem\"" . (($filtro["comparacao"] == "nao_contem") ? "selected" : "") . ">Não contém</option>"
                . "\n\t\t</select>"
                . "\n\t</td>"
                . "\n\t<td>"
                . "\n\t\t<input class=\"form-control mb-2 mr-sm-2\" name=\"filtro_texto\" type=\"text\" value=\"" 
                    . (($filtro["texto"] != "") ? $filtro["texto"] : "") . "\" autocomplete=\"off\"/>"
                . "\n\t</td>"
                . "\n\t<td>"
                . "\n\t\t<button class=\"btn btn-danger\" type=\"button\" onclick=\"deleteRow(this)\">"
                . "\n\t\t<i class=\"fas fa-minus-circle\"></i> Remover Filtro"
                . "\n\t\t</button>"
                . "\n\t</td>";
        }
        return $tabela;
    }

    /**
     * Método responsável por organizar os filtros de acordo com a prioridade de busca
     * Prioridade: titulo, data_publicacao, autor, assunto
     */
    private function organizaFiltros($filtros)
    {
        $novosFiltros = [
            'titulo'          => [],
            'data_publicacao' => [],
            'autor'           => [],
            'assunto'         => []
        ];
        foreach ($filtros as $key => $filtro) {
            switch ($filtro['campo']) {
                case 'titulo':
                    $novosFiltros['titulo'][] = $filtro;
                    break;
                case 'data_publicacao':
                    $novosFiltros['data_publicacao'][] = $filtro;
                    break;
                case 'autor':
                    $novosFiltros['autor'][] = $filtro;
                    break;
                case 'assunto':
                    $novosFiltros['assunto'][] = $filtro;
                    break;
            }
        }
        return $novosFiltros;
    }

    /**
     * Método responsável por buscar os trabalhos com titulo e data desejados
     */
    private function aplicaFiltrosTituloData($filtros, $trabalhos) {
        var_dump($filtros);
        foreach ($filtros['titulo'] as $key => $filtro) {
            $trabalhos = self::aplicaFiltroTitulo($filtro, $trabalhos);
        }
        foreach ($filtros['data_publicacao'] as $key => $filtro) {
            $trabalhos = self::aplicaFiltroData($filtro, $trabalhos);
        }

    }

    /**
     * Método responsável por buscar os trabalhos com titulo desejado
     */
    private function aplicaFiltroTitulo($filtro, $trabalhos)
    {
        $trabalhosFiltrados = [];
        switch ($filtro['comparacao']) {
            case 'contem':
                foreach ($trabalhos as $key => $trabalho)
                    if (stripos($trabalho['title'], $filtro['texto']) !== false)
                        $trabalhosFiltrados[] = $trabalho;
                break;
            case 'igual':
                foreach ($trabalhos as $key => $trabalho)
                    if (strcmp($trabalho['title'], $filtro['texto']) === 0)
                        $trabalhosFiltrados[] = $trabalho;
                break;
            case 'nao_contem':
                foreach ($trabalhos as $key => $trabalho)
                    if (stripos($trabalho['title'], $filtro['texto']) === false)
                        $trabalhosFiltrados[] = $trabalho;
                break;
        }
        return $trabalhosFiltrados;
    }

    /**
     * Método responsável por buscar os trabalhos com a data desejada
     */
    private function aplicaFiltroData($filtro, $trabalhos)
    {
        
    }
}
