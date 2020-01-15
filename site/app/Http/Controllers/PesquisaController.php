<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PesquisaController extends Controller
{
    public function pesquisar(Request $request)
    {
        // Pegar todo o request
        // var_dump($request->all());

        // Pega o request get 'nome'
        echo $request->input('nome');

        return "\n\nEntrou na pesquisa de trabalhos";
    }
}
