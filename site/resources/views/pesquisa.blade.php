@extends('layouts.app')
@section('content')

<div id="container-pesquisa" class="container-fluid">
    <div class='container'>
        <div class="titulo-pagina"> 
            <h2>Pesquisa</h2>
        </div>
        <p>Busca de: {{$pesquisa}}</p>
        <div class="conteudo">
            @foreach ($trabalhos as $trabalho)
                <div>
                    <p><a href="/trabalho/{{$trabalho['id']}}">{{$trabalho['title']}}</a></p>
                    <p>{{$trabalho['abstract']}}</p>
                </div>
            @endforeach
        </div>

        <br><br><br><br><br>
    </div>
</div>

@endsection