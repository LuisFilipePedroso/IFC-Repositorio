@extends('layouts.app')
@section('content')

<div id="container-pesquisa" class="container-fluid">
    <div class='container'>
        <div class="titulo-pagina"> 
            <h2>Pesquisa</h2>
            @if($pesquisa)
                <h4>Buscando trabalhos sobre: {{$pesquisa}}</h4>
            @endif
        </div>
        <div class="conteudo">
            <form action="pesquisa" method="get" class="border border-gray">
                <div id="container-filtros">
                    <h5>Busca Avançada</h5>
                    <table class="table" id="tabela_filtros_pesquisa_trabalho">
                        <tbody>
                            <?= $tabela ?>
                        </tbody>
                    </table>​​​​
                    <div id="botoes">
                        <button class="btn btn-primary" type="button" onclick="addRow('tabela_filtros_pesquisa_trabalho')">
                            <i class="fas fa-plus-circle"></i> Novo Filtro
                        </button>
                        <button class="btn btn-success" type="submit">
                            <i class="fas fa-check-circle"></i> Aplicar Filtros
                        </button>
                    </div>
                </div>
            </form>

            <div class="titulo-resultados"> 
                <h2>Resultados</h2>
            </div>

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