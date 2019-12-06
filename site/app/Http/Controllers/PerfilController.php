<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PerfilController extends Controller
{
    public function index()
    {
        $client = new \GuzzleHttp\Client([
            'base_uri' => 'localhost:3333',
            'timeout'  => 2.0,
        ]);
        
        $response = $client->request('GET', '/users'.'/'.auth()->user()->id);

        $usuario = json_decode($response->getBody());

        return view('perfil', compact('usuario'));
    }
}
