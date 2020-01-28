@extends('layouts.app')
@section('content')

@push('head')
    <!-- DATATABLE CSS -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css">
    <!-- DATATABLE SCRIPTS -->
    <script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.3.1.js" defer></script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js" defer></script>
    <!-- HELPERS PESQUISA -->
    <script type="text/javascript" src="{{ asset('js/view_pesquisa.js') }}" defer></script>
@endpush

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
                        @if($mensagemErroFiltro)
                            <h6>{{$mensagemErroFiltro}}</h6>
                        @endif
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
            <table id="tabela_trabalhos" class="table">
                <thead>
                    <tr>
                        <th>Trabalhos</th>
                    </tr>
                </thead>
                <tbody>
                    @if($trabalhos)
                        @foreach ($trabalhos as $trabalho)
                            <tr>
                                <td>
                                <a id="trabalho" href="/trabalho/{{$trabalho['id']}}">
                                    <h5>{{$trabalho['title']}}</h5>
                                    @if($trabalho['usuarios'])
                                        <p>
                                        @foreach ($trabalho['usuarios'] as $usuario)
                                            {{$usuario}} |
                                        @endforeach
                                        Publicação: {{$trabalho['year']}}
                                        </p>
                                    @else
                                        <p>Publicação: {{$trabalho['year']}}</p>
                                    @endif
                                    <p>{{$trabalho['abstract']}}</p>
                                </a>
                                </td>
                            </tr>
                        @endforeach
                    @else
                        <tr>
                            <td>Nenhum trabalho encontrado com os filtros fornecidos! </td>
                        </tr>
                    @endif
                </tbody>
            </table>​​​​
        </div>
        <br><br><br><br><br>
    </div>
</div>

@endsection