@extends('layouts.app')

@section('content')
    <div class="container-fluid" >
        <div class="row">
                <div class="col-md-2" id="menuLateral">
                    <ul class="nav nav-pills flex-column">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Meu perfil</a>
                            <a class="nav-link" href="#">Meus trabalhos</a>
                            <a class="nav-link" href="#">Enviar novo trabalho</a>
                            <a class="nav-link" href="#">Dashboard</a>
                        </li>
                     </ul>
                </div>
                <div class="col-md-8" id="cont">

                    <img id='imgProf' src="{{ asset('img/icon-profile/icon-login-default.png') }}">
                    <input type="text" id="campoProf" readonly value="Nome do usuário">

                </div>
        </div>
    </div>
@endsection