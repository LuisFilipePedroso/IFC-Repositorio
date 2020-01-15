<?php

namespace App\Http\Controllers;

use Datetime;

class TrabalhoController extends Controller
{
    public function index($id)
    {
        $client = new \GuzzleHttp\Client([
            'base_uri' => 'localhost:3333',
            'timeout'  => 2.0,
        ]);
        
        // Busca o trabalho
        $response = $client->request('GET', '/articles/' . $id);
        $trabalho = json_decode($response->getBody(), true);
        
        // Não encontrou trabalho com o id determinado
        if (is_null($trabalho)) {
            return view('home');
        }

        // Busca os artigos
        $cursos = $this->getCoursesFromArticle($client, $id);

        // Busca os usuários
        $usuarios = $this->getUsersFromArticle($client, $id);

        // Busca o evento
        $response = $client->request('GET', '/events/' . $trabalho['event_id']);
        $evento = json_decode($response->getBody(), true);

        // Formata a data de publicação
        $date = new Datetime($trabalho['date']);
        $trabalho['date'] = $date->format('d/m/Y');
        
        return view(
            'trabalho', 
            compact('trabalho', 'usuarios', 'cursos', 'evento')
        );
    }

    /**
     * Busca todos os cursos de um artigo, retornando 'id' e 'name' de cada curso
     */
    private function getCoursesFromArticle($client, $id)
    {
        $response = $client->request('GET', '/coursesarticles');
        $todosTrabalhos = json_decode($response->getBody());

        // Busca os cursos do artigo
        $cursos = [];
        foreach ($todosTrabalhos as $trabalho) {
            if ($trabalho->article_id == $id) {
                $cursos[] = [
                    'id'   => $trabalho->{'Courses.id'},
                    'name' => $trabalho->{'Courses.name'}
                ];
            }
        }

        return $cursos;
    }

    /**
     * Busca todos os usuários de um artigo
     * Retornando 'id', 'firstname' e 'lastname' de cada usuario
     */
    private function getUsersFromArticle($client, $id)
    {
        $response = $client->request('GET', '/usersarticles');
        $todosUsuarios = json_decode($response->getBody());

        // Busca os usuários do artigo
        $usuarios = [];
        foreach ($todosUsuarios as $usuario) {
            if ($usuario->article_id == $id) {
                $usuarios[] = [
                    'id'        => $usuario->Users[0]->id,
                    'firstname' => $usuario->Users[0]->firstname,
                    'lastname'  => $usuario->Users[0]->lastname
                ];
            }
        }

        return $usuarios;
    }
}
