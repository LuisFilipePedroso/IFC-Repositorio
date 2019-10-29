<?php
namespace App\Helpers;

use Illuminate\Pagination\LengthAwarePaginator;
use App\Tarefas\Tarefa;
use App\Log;
use App\Cliente;
use Illuminate\Support\Facades\DB;
use App\Fatura;

class Helper {
    public static function setQueryString($request) {
        session([
            'query' => $request->query()
        ]);
    }

    public static function trataQueryString() {
        $qryString = session('query', null);

        if (isset($qryString) && count($qryString) > 0) {
            return http_build_query($qryString);
        }

        return null;
    }

    public static function trataFiltroRegistrosPagina($filtroRegistrosPagina) {
        return $filtroRegistrosPagina ? $filtroRegistrosPagina : 50;
    }

    public static function sanitize($valor) {
        return filter_var($valor, FILTER_SANITIZE_STRING);
    }

    public static function arrayPaginator($query, $request, $registrosPorPagina = 10) {
        $paginaAtual = $request->get('page', 1);
        $offset = ($paginaAtual * $registrosPorPagina) - $registrosPorPagina;

        return new LengthAwarePaginator(array_slice($query, $offset, $registrosPorPagina, true), count($query), $registrosPorPagina, $paginaAtual, ['path' => $request->url(), 'query' => $request->query()]);
    }

    public static function retornaRegistrosPagina($filtroRegistros = null, $tamanhoCol = 6) {
        $selected50 = $filtroRegistros == 50 ? 'selected' : null;
        $selected100 = $filtroRegistros == 100 ? 'selected' : null;
        $selected500 = $filtroRegistros == 500 ? 'selected' : null;

        $html = '
            <div class="form-group col-'.$tamanhoCol.' float-left">
                <label>Registros por página:</label>
                <select class="form-control" name="filtro-registros-pagina">
                    <option '.$selected50.' value="50">50</option>
                    <option '.$selected100.' value="100">100</option>
                    <option '.$selected500.' value="500">500</option>
                </select>
            </div>';

        return $html;
    }
}
