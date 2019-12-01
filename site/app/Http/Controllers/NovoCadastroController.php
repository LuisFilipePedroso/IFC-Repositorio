<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NovoCadastroController extends Controller
{
    public function index()
    {
        return view('aceitarnovocadastro');
    }
}
