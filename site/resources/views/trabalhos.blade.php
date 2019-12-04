@extends('layouts.app')

@section('content')
    <div class="container-fluid" >
        <div class="row">
                <div class="col-md-2" id="menuLateral">
                    <ul class="nav nav-pills flex-column">
                        <li class="nav-item">
                            <a class="nav-link" href="/upload/perfil">Meu perfil</a>
                            <a class="nav-link active" href="/upload/trabalhos">Meus trabalhos</a>
                            <a class="nav-link" href="/upload/novotrabalho">Enviar novo trabalho</a>
                            <a class="nav-link" href="/upload/aceitarnovotrabalho">Aceitar novo trabalho</a>
                            <a class="nav-link" href="/upload/novocadastro">Aceitar novo cadastro</a>
                            <a class="nav-link" href="#">Dashboard</a>
                        </li>
                     </ul>
                </div>
                <div class="col-md-8" id="cont">
                    <h3 align="center">Lista de todos os trabalhos submetidos</h3>
                    <div id="trabalhosAceitos">
                        <p id="contTrab">Titulo:</p>
                        <p id="contTrab">Autor:</p>
                        <p id="contTrab">Status:</p>
                        <p id="contTrab">Nº de visualizações:</p>
                        <p id="contTrab">Nº de downloads:</p>
                    </div>
                    <div id="trabalhosAnalise">
                        <p id="contTrab">Titulo:</p>
                        <p id="contTrab">Autor:</p>
                        <p id="contTrab">Status:</p>
                        <p id="contTrab">Nº de visualizações:</p>
                        <p id="contTrab">Nº de downloads:</p>
                    </div>
                </div>
        </div>
    </div>
@endsection