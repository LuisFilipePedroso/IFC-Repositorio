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
                            <a class="nav-link" href="/upload/aceitarnovotrabalho">Aceitar novo trabalho</a>
                            <a class="nav-link" href="/upload/novocadastro">Aceitar novo cadastro</a>
                            <a class="nav-link" href="#">Dashboard</a>
                        </li>
                     </ul>
                </div>
                <div class="col-md-8" id="cont">
                    >Home page da parte de upload, ver o que pode ser colocado (texto, imagem, mensagem de bem vindo, etc)
                </div>
        </div>
    </div>
@endsection