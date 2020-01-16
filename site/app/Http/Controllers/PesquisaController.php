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
        // var_dump($request->all());
        // Pega o request get 'nome'
        $pesquisa = $request->input('nome');

        // Busca os trabalhos
        $response = $client->request('GET', '/articles');
        $trabalhos = json_decode($response->getBody(), true);

        // APLICAR OS FILTROS DE BUSCA

        
        // Busca os usuários de cada artigo
        foreach ($trabalhos as &$trabalho) {
            $trabalho['usuarios'] = $this->getUsersFromArticle($client, $trabalho['id']);
        }

        // var_dump($trabalhos);
        
        // // Não encontrou trabalho com o id determinado
        // if (is_null($trabalho)) {
        //     return view('home');
        // }

        return view(
            'pesquisa', 
            compact('pesquisa', 'trabalhos')
        );
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
}
