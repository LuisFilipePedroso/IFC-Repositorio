
// JAVASCRIPT UTILIZADO NA TELA DE PESQUISA DE TRABALHOS

/**
 * Método responsável por ler o request GET e retornar para parâmetro
 */
function getRequestGet()
{
    let request = window.location.search.substring(1);
    request = decodeURI(request);
    request = request.replace(/\+/g, ' ');
    request = request.split("&");
    let filtros = [];
    request.forEach(element => {
        filtros.push(element.split("="));
    });
    return filtros;
}

/**
 * Método responsável por verificar se o request possui filtros válidos
 * e montar os filtros
 * 
 * @param {array} request 
 */
function montaFiltros(request)
{
    let filtros = [];
    for (let i = 0; i < request.length; i++) {
        if (
            typeof request[i]      != "undefined" &&
            typeof request[i+1]    != "undefined" &&
            typeof request[i+2]    != "undefined" &&
            typeof request[i][0]   != "undefined" &&
            typeof request[i+1][0] != "undefined" &&
            typeof request[i+2][0] != "undefined" &&
            typeof request[i][1]   != "undefined" &&
            typeof request[i+1][1] != "undefined" &&
            typeof request[i+2][1] != "undefined" &&
            request[i][0]   === "filtro_campo" &&
            request[i+1][0] === "filtro_comparacao" &&
            request[i+2][0] === "filtro_texto"
        ) {
            filtros.push({
                campo:      request[i][1],
                comparacao: request[i+1][1],
                texto:      request[i+2][1]
            })
        } else {
            return false;
        }
        i = i+2;
    }
    return filtros;
}

/**
 * Método responsável por validar se cada filtro foi preenchido corretamente
 * 
 * @param {array} filtros 
 */
function validaFiltros(filtros)
{
    let tiposFiltrosCampo = ["titulo", "autor", "assunto", "data_publicacao"];
    let tiposFiltrosComparacao = ["contem", "igual", "nao_contem"];

    for (let i = 0; i < filtros.length; i++) {
        const element = filtros[i];

        if (
            !tiposFiltrosCampo.includes(element["campo"]) ||
            !tiposFiltrosComparacao.includes(element["comparacao"])
        ) {
            return false;
        }
        // Validação especial para o tipo data
        if (element["campo"] === tiposFiltrosCampo[3]) {
            // Permitido apenas: XXXX (Ex: 2020) ou XXXX-XXXX (2017-2020)
            let pattern = /^[0-9]{4}(\-[0-9]{4}|)$/;
            if (!pattern.test(element["texto"])) {
                return false;
            }

        }
    };
    return true;
}

/**
 * 
 */
function gerarFiltros()
{
    let request = getRequestGet();
    // Validar se veio vazio ou apenas com o 'nome'
    if (typeof request[0] != "undefined" && typeof request[0]["nome"] != "undefined") {
        return [1, request];
    }
    
    let filtros = montaFiltros(request);
    if (!filtros) {
        return false;
    }

    if (!validaFiltros(filtros)) {
        return false;
    }
    return [2, filtros];
}

/**
 * Método responsável por remover uma linha da tabela de id deteminado
 * 
 * @param {string} button 
 */
function deleteRow(button)
{
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

/**
 * Método responsável por adicionar uma nova linha na tabela
 * 
 * @param {string} tabelaID 
 * @param {array} filtros 
 */
function addRow(tabelaID, filtros = null) 
{
    // Busca a tabela pelo id
    let tabela = document.getElementById(tabelaID);
    
    if (!filtros) {
        filtros = [{
            campo: "",
            comparacao: "",
            texto: ""
        }]
    }

    let novaLinha = null;
    filtros.forEach(element => {
        // Insere uma nova linha no fim da tabela
        novaLinha = tabela.insertRow(-1);

        // Insere as novas células
        let celulaCampo = novaLinha.insertCell(0);
        celulaCampo.innerHTML = ""
            + "<select class=\"custom-select mr-sm-2\" name=\"filtro_campo\">"
            + "<option value=\"titulo\" "          + ((element["campo"] == "titulo") ? "selected" : "") + ">Título</option>"
            + "<option value=\"autor\" "           + ((element["campo"] == "autor") ? "selected" : "") + ">Autor</option>"
            + "<option value=\"assunto\" "         + ((element["campo"] == "assunto") ? "selected" : "") + ">Assunto</option>"
            + "<option value=\"data_publicacao\" " + ((element["campo"] == "data_publicacao") ? "selected" : "") + ">Data de publicação</option>"
            + "</select>";

        let celulaComparacao = novaLinha.insertCell(1);
        celulaComparacao.innerHTML = ""
            + "<select class=\"custom-select mr-sm-2\" name=\"filtro_comparacao\">"
            + "<option value=\"contem\""     + ((element["comparacao"] == "contem") ? "selected" : "") + ">Contém</option>"
            + "<option value=\"igual\""      + ((element["comparacao"] == "igual") ? "selected" : "") + ">Igual</option>"
            + "<option value=\"nao_contem\"" + ((element["comparacao"] == "nao_contem") ? "selected" : "") + ">Não contém</option>"
            + "</select>";
        
        let celulaTexto = novaLinha.insertCell(2)
        celulaTexto.innerHTML = "<input class=\"form-control mb-2 mr-sm-2\" name=\"filtro_texto\" type=\"text\" value=\"" 
                                + ((element["texto"] != "") ? element["texto"] : "") + "\" autocomplete=\"off\"/>";

        let celulaBotao = novaLinha.insertCell(3)
        celulaBotao.innerHTML = ""
            + "<button class=\"btn btn-danger\" type=\"button\" onclick=\"deleteRow(this)\">"
            + "<i class=\"fas fa-minus-circle\"></i> Remover Filtro"
            + "</button>";
    });
}

window.onload = function() {
    tabelaID = "tabela_filtros_pesquisa_trabalho";
    let tabela = document.getElementById(tabelaID);
    if (!tabela) {
        return;
    }
    let filtros = gerarFiltros();
    if (filtros && filtros[0] == 2) {
        addRow(tabelaID, filtros[1]);
    } else {
        addRow(tabelaID);
    }
};

// EXEMPLO URL:
// http://localhost:8000/pesquisa?filtro_campo=autor&filtro_comparacao=igual&filtro_texto=Mathias+Artur+Schulz&filtro_campo=titulo&filtro_comparacao=contem&filtro_texto=Intelig%C3%AAncia+Artificial&filtro_campo=data_publicacao&filtro_comparacao=contem&filtro_texto=2017-2019