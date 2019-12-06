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
                    <h2 align="center">Bem-vindo ao repositório de trabalhos acadêmicos do IFC Campus Rio do Sul!</h2>
                    <br>
                    <h6 align="justify" style=" padding-left: 4em;">Aqui você poderá publicar seus trabalhos e artigos acadêmicos, eles serão salvos na nossa base de dados e estarão disponíveis para qualquer
                    pessoa que acesse o nosso site.<br>
                    Também é possível verificar na guia "Meus Trabalhos" o número de visualizações e downloads do seu projeto. Para que o seu trabalho seja publicado é
                    necessário a aprovação de algum professor, não necessariamente do seu curso, é possível verificar o status do trabalho também na guia "Meus trabalhos", os 
                    trabalhos com o fundo verde já foram aceitos e com fundo amarelo estão aguardando aprovação.</h6>
                </div>
        </div>
    </div>
@endsection

