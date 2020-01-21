<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PesquisaController extends Controller
{
    public function pesquisar(Request $request)
    {
        $client = new \GuzzleHttp\Client([
            'base_uri' => 'localhost:3333',
            'timeout'  => 2.0,
        ]);

        // Pegar todo o request
        // foreach ($request->all() as $a) {
        //     echo $a;
        // }
        // foreach($request->all() as $key => $val) {
        //     echo $key. ': ' .$val;
        // }
        // var_dump($request);
        // var_dump($_GET);

        // $cod_deptos = $_GET['mathias'];
        // var_dump($cod_deptos);

        $result = self::gerarFiltros();
        var_dump($result);

        // foreach($cod_deptos as $cod_depto){
        //     echo $cod_depto . "<br />";
        // }

        // parse_str($request->all(), $output);

        // //Exibe o resultado
        // print_r($output);

        // Pega o request get 'nome'
        // $pesquisa = $request->input('nome');

        // // Busca os trabalhos
        // $response = $client->request('GET', '/articles');
        // $trabalhos = json_decode($response->getBody(), true);

        // // APLICAR OS FILTROS DE BUSCA

        
        // // Busca os usuários de cada artigo
        // foreach ($trabalhos as &$trabalho) {
        //     $trabalho['usuarios'] = $this->getUsersFromArticle($client, $trabalho['id']);
        // }

        // var_dump($trabalhos);
        
        // // Não encontrou trabalho com o id determinado
        // if (is_null($trabalho)) {
        //     return view('home');
        // }

        // return view(
        //     'pesquisa', 
        //     compact('pesquisa', 'trabalhos')
        // );
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

    public function gerarFiltros()
    {
        $request = self::getRequestGet();
        // var_dump($request);

        // VALIDAR QUANDO FOR APENAS O NOME
        if (!$request) {
            return [1, request];
        }
        
        $filtros = self::montaFiltros($request);
        if (!$filtros) {
            return false;
        }

        if (!self::validaFiltros($filtros)) {
            return false;
        }
        return [2, $filtros];
    }

    /**
     * Método responsável por ler o request GET e retornar os parâmetros
     */
    public function getRequestGet()
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
    public function montaFiltros($request)
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
                return false;
            }
            $i = $i + 2;
        }
        return $filtros;
    }

    /**
     * Método responsável por validar se cada filtro foi preenchido corretamente
     */
    public function validaFiltros($filtros)
    {
        $tiposFiltrosCampo = ["titulo", "autor", "assunto", "data_publicacao"];
        $tiposFiltrosComparacao = ["contem", "igual", "nao_contem"];

        for ($i = 0; $i < count($filtros); $i++) {
            $element = $filtros[$i];

            if (
                !in_array($element["campo"], $tiposFiltrosCampo) ||
                !in_array($element["comparacao"], $tiposFiltrosComparacao)
            ) {
                return false;
            }
            // Validação especial para o tipo data
            if ($element["campo"] === $tiposFiltrosCampo[3]) {
                // Permitido apenas: XXXX (Ex: 2020) ou XXXX-XXXX (2017-2020)
                $pattern = "/^[0-9]{4}(\-[0-9]{4}|)$/";
                $resultado = preg_match($pattern, $element["texto"], $matches);
                if (!$resultado) {
                    return false;
                }
            }
        };
        return true;
    }
}
