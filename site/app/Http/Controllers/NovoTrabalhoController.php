<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NovoTrabalhoController extends Controller
{
    public function index()
    {
        return view('novotrabalho');
    }
}
