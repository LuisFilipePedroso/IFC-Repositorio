@extends('layouts.app')

@section('content')
    <div class="container-fluid" >
        <div class="row">
                <div class="col-md-2" id="menuLateral">
                    <ul class="nav nav-pills flex-column">
                        <li class="nav-item">
                            <a class="nav-link" href="/upload/perfil">Meu perfil</a>
                            <a class="nav-link" href="/upload/trabalhos">Meus trabalhos</a>
                            <a class="nav-link" href="/upload/novotrabalho">Enviar novo trabalho</a>
                            <a class="nav-link active" href="/upload/aceitarnovotrabalho">Aceitar novo trabalho</a>
                            <a class="nav-link" href="/upload/novocadastro">Aceitar novo cadastro</a>
                            <a class="nav-link" href="#">Dashboard</a>
                        </li>
                     </ul>
                </div>
                <div class="col-md-8" id="cont">
                    <h3 align="center">Lista de todos os trabalhos pendentes de aprovação</h3>
                    <div id="trabalhosAnalise">
                        <p id="contTrab">Titulo:</p>
                        <p id="contTrab">Autor:</p>
                        <p id="contTrab">Curso:</p>
                        <script src="https://use.fontawesome.com/62e43a72a9.js"></script>
                        <button type="submit" class="btn btn-success btn-sm" id="btnAcc"><i class="fas fa-check-circle"></i> Aceitar</button>
                    </div>
                    <div id="trabalhosAnalise">
                        <p id="contTrab">Titulo:</p>
                        <p id="contTrab">Autor:</p>
                        <p id="contTrab">Curso:</p>
                        <script src="https://use.fontawesome.com/62e43a72a9.js"></script>
                        <button type="submit" class="btn btn-success btn-sm" id="btnAcc"><i class="fas fa-check-circle"></i> Aceitar</button>
                    </div>
                </div>
        </div>
    </div>
@endsection