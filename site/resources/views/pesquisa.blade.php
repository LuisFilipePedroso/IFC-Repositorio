@extends('layouts.app')
@section('content')

<div id="container-pesquisa" class="container-fluid">
    <div class='container'>
        <div class="titulo-pagina"> 
            <h2>Pesquisa</h2>
            <h4>Busca por: {{$pesquisa}}</h4>
        </div>
        <div class="conteudo">
            <form action="pesquisa" method="get" class="border border-gray">
                <div id="container-filtros">
                    <h4>Filtros</h4>
                    <table class="table" id="tabela_filtros">
                        <tbody>
                            <tr>
                                <td>
                                    <select class="custom-select mr-sm-2" name="filtro_campo">
                                        <option value="titulo">Título</option>
                                        <option value="autor">Autor</option>
                                        <option value="assunto">Assunto</option>
                                        <option value="data_publicacao">Data de publicação</option>
                                    </select>
                                </td>
                                <td>
                                    <select class="custom-select mr-sm-2" name="filtro_comparacao">
                                        <option value="contem">Contém</option>
                                        <option value="igual">Igual</option>
                                        <option value="nao_contem">Não contém</option>
                                    </select>
                                </td>
                                <td>
                                    <input class="form-control mb-2 mr-sm-2" name="filtro_texto" type="text" autocomplete="off"/>
                                </td>
                                <td>
                                    <button class="btn btn-danger" type="button" onclick="deleteRow(this)">
                                        <i class="fas fa-minus-circle"></i> Remover Filtro
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>​​​​
                    <button class="btn btn-primary" type="button" onclick="addRow('tabela_filtros')">
                        <i class="fas fa-plus-circle"></i> Novo Filtro
                    </button>
                    <button class="btn btn-success" type="submit">
                        <i class="fas fa-check-circle"></i> Aplicar Filtros
                    </button>
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