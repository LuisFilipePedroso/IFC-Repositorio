@extends('layouts.app')

@section('content')
    <div class="container-fluid" >
        <div class="row">
                <div class="col-md-2" id="menuLateral">
                    <ul class="nav nav-pills flex-column">
                        <li class="nav-item">
                            <a class="nav-link" href="/upload/perfil">Meu perfil</a>
                            <a class="nav-link" href="/upload/trabalhos">Meus trabalhos</a>
                            <a class="nav-link active" href="/upload/novotrabalho">Enviar novo trabalho</a>
                            <a class="nav-link" href="/upload/aceitarnovotrabalho">Aceitar novo trabalho</a>
                            <a class="nav-link" href="/upload/novocadastro">Aceitar novo cadastro</a>
                            <a class="nav-link" href="#">Dashboard</a>
                        </li>
                     </ul>
                </div>

                <div class="col-md-8" id="cont">

                    <form action="{{ route('novotrabalho.store') }}" enctype="multipart/form-data" method="POST">
                        @csrf
                        <h3 align="center">Preencha os campos abaixo para submeter um novo trabalho.</h3>
                        <p id="textoEnv">Titulo</p>
                        <input class="form-control" type="text" id="campoEnv" placeholder="Titulo do trabalho" name="titulo" required>

                        <p id="textoEnv">Idioma</p>
                        <input class="form-control" type="text" id="campoEnv" placeholder="Idioma do trabalho" name="idioma" required>

                        <p id="textoEnv">Tipo do trabalho</p>
                        <input class="form-control" type="text" id="campoEnv" placeholder="Insira o tipo do trabalho (ex: TCC)" name="tipo" required>

                        <p id="textoEnv">Selecione a qual curso o trabalho se refere</p>
                        <select class="custom-select" id="campoEnv" name="curso" required>
                            <option value=""></option>
                            <option value="bcc">Ciência da computação</option>
                            <option value="fis">Física</option>
                            <option value="agro">Agronômia</option>
                            <option value="pedago">Pedagogia</option>
                            <option value="mat">Matemática</option>
                        </select>
                        
                        <p id="textoEnv">Palavras chave</p>
                        <input class="form-control" type="text" id="campoEnv" placeholder="Palavras chave do trabalho" name="palavras-chave" required>
                        
                        <p id="textoEnv">Tags</p>
                        <input class="form-control" type="text" id="campoEnv" placeholder="Tags do trabalho" name="tags">
                        
                        <p id="textoEnv">Abstract</p>
                        <textarea class="form-control" id="campoEnv" placeholder="Abstract do trabalho" rows="5" name="abstract" required> </textarea>
                        
                        <p id="textoEnv"> Data do trabalho</p>
                        <input class="form-control" type="date" id="campoEnv" name="data" required>

                        <p id="textoEnv"> Selecione o trabalho</p>
                        <input class="form-control" name="userfile" id="campoEnv" name="trabalho" type="file" />

                        


                        <button type="submit" id="buttonEnv" class="btn btn-success">Enviar</button>
                    </form>           

                </div>
        </div>
    </div>
@endsection