@extends('layouts.app')
@section('content')

<div id="container-trabalho" class="container-fluid">
    <div class='container'>
        <div class="titulo-pagina"> 
            <h2>{{$aTrabalho['title']}}</h2>
        </div>

        <div class="row">
            <div class="col-sm-3">
                <div class="titulo">Autor</div>
                <div class="conteudo">
                    <a href="#" target="_blank">{{$aUsuario['firstname']}} {{$aUsuario['lastname']}}</a>
                </div>
                <div class="titulo">Tipo de Trabalho</div>
                <div class="conteudo">{{$aTrabalho['type']}}</div>
                <div class="titulo">Abrir documento</div>
                <div class="conteudo"><a href="{{$aTrabalho['url']}}" target="_blank">
                    <img id='documento' src="{{ asset('img/documento.png') }}" alt="pdf"> {{$aTrabalho['url']}}
                </a></div>
                <div class="titulo">Data de Publicação</div>
                <div class="conteudo">{{$aTrabalho['date']}}</div>
                <div class="titulo">Palavras-chave</div>
                <div class="conteudo">{{$aTrabalho['keywords']}}{{$aTrabalho['tags']}}</div>
                <div class="titulo">Linguagem</div>
                <div class="conteudo">{{$aTrabalho['language']}}</div>
                
            </div>
            <div class="col-sm-9">
                <div class="titulo">Resumo</div>
                <div class="conteudo texto">{{$aTrabalho['abstract']}}</div>
                <div class="titulo">Abstract</div>
                <div class="conteudo texto">{{$aTrabalho['altabstract']}}</div>
                <div class="row">
                    <div class="col-sm-5">
                        <div class="titulo">Curso</div>
                        <div class="conteudo">{{$aCurso['name']}}</div>
                    </div>
                    <div class="col-sm-7">
                        <div class="titulo">Evento de publicação</div>
                        <div class="conteudo">
                            <a href="{{$aEvento['url']}}" target="_blank">
                                {{$aEvento['name']}} - {{$aEvento['year']}}<br>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br><br><br><br>
    </div>
</div>

@endsection