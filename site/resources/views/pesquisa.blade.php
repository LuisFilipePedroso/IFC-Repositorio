@extends('layouts.app')
@section('content')

<div id="container-pesquisa" class="container-fluid">
    <div class='container'>
        <div class="titulo-pagina"> 
            <h2>Pesquisa</h2>
        </div>
        <p>Busca de: {{$pesquisa}}</p>
        <div class="conteudo">

            <form action="discover" method="get" onsubmit="javascript:tSubmit(this);" class="border border-primary">
                <div id="container-filtros">
                    <h4>Filtros</h4>
                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <select class="custom-select mr-sm-2" name="filtro_campo">
                                <option value="titulo">Título</option>
                                <option value="autor">Autor</option>
                                <option value="assunto">Assunto</option>
                                <option value="data_publicacao">Data de publicação</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <select class="custom-select mr-sm-2" name="filtro_comparacao">
                                <option value="contains">Contém</option>
                                <option value="equals">Igual</option>
                                <option value="notcontains">Não contém</option>
                            </select>
                        </div>
                        <div class="form-group col-md-5">
                            <input class="form-control mb-2 mr-sm-2" name="filter_1" type="text" autocomplete="off"/>
                        </div>
                        <div class="form-group col-md-2">
                            <button class="btn btn-danger" type="button" name="remover_filtro">
                                <i class="fas fa-minus-circle"></i> Remover Filtro
                            </button>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-2">
                            <button class="btn btn-success" type="button" name="confirmar_filtros">
                                <i class="fas fa-check-circle"></i> Aplicar Filtros
                            </button>
                        </div>
                        <div class="form-group col-md-8">
                        </div>
                        <div class="form-group col-md-2">
                            <button class="btn btn-primary" type="button" name="adicionar_filtro">
                                <i class="fas fa-plus-circle"></i> Novo Filtro
                            </button>
                        </div>
                    </div>
                </div>
            </form>

            <div class="titulo-pagina"> 
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