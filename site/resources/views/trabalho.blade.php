@extends('layouts.app')
@section('content')

<div id="container-trabalho" class="container-fluid">
    <div class='container'>
        <div class="titulo-pagina"> 
            <h2>{{$trabalho['title']}}</h2>
        </div>

        <div class="row">
            <div class="col-sm-3">
                <div class="titulo">Autores</div>
                <div class="conteudo">
                    @foreach ($usuarios as $usuario)
                        <p>{{$usuario['firstname']}} {{$usuario['lastname']}}</p>
                        @if (!$loop->last)
                            <br>
                        @endif
                    @endforeach
                </div>
                <div class="titulo">Tipo de Trabalho</div>
                <div class="conteudo">{{$trabalho['type']}}</div>
                <div class="titulo">Abrir documento</div>
                <div class="conteudo"><a href="{{$trabalho['url']}}" target="_blank">
                    <img id='documento' src="{{ asset('img/documento.png') }}" alt="pdf"> {{$trabalho['url']}}
                </a></div>
                <div class="titulo">Data de Publicação</div>
                <div class="conteudo">{{$trabalho['date']}}</div>
                <div class="titulo">Palavras-chave</div>
                <div class="conteudo">
                    {{$trabalho['keywords']}}
                    @if ($trabalho['keywords'] and $trabalho['tags'])
                        <br>
                    @endif
                    {{$trabalho['tags']}}
                </div>
                <div class="titulo">Linguagem</div>
                <div class="conteudo">{{$trabalho['language']}}</div>
            </div>

            <div class="col-sm-9">
                <div class="titulo">Resumo</div>
                <div class="conteudo texto">{{$trabalho['abstract']}}</div>
                <div class="titulo">Abstract</div>
                <div class="conteudo texto">{{$trabalho['altabstract']}}</div>
                <div class="row">
                    <div class="col-sm-5">
                        <div class="titulo">Cursos</div>
                        <div class="conteudo">
                            @foreach ($cursos as $curso)
                                {{$curso['name']}}
                                @if (!$loop->last)
                                    <br>
                                @endif
                            @endforeach
                        </div>
                    </div>
                    <div class="col-sm-7">
                        <div class="titulo">Evento de publicação</div>
                        <div class="conteudo">
                            @if ($evento['url'])
                                <a href="{{$evento['url']}}" target="_blank">
                                    {{$evento['name']}} - {{$evento['year']}}
                                </a>
                            @else
                                <p>{{$evento['name']}} - {{$evento['year']}}</p>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br><br>
    </div>
</div>

@endsection