
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
        return request;
    }
    
    let filtros = montaFiltros(request);
    if (!filtros) {
        return false;
    }

    if (!validaFiltros(filtros)) {
        return false;
    }
    return filtros;
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

function addRow(tableID) 
{
    // Busca a tabela pelo id
    let table = document.getElementById(tableID);
    // Insere uma nova linha no fim da tabela
    let novaLinha = table.insertRow(-1);
    // Insert a cell in the row at index 0
    let newCell = novaLinha.insertCell(0);
    // var x = row.insertCell(2);
    // x.innerHTML = "New cell";
  
    // Append a text node to the cell
    let newText = document.createTextNode('New bottom row');
    newCell.appendChild(newText);
}

window.onload = function() {
    let table = document.getElementById("tabela_filtros_pesquisa_trabalho");
    if (!table) {
        return;
    }
    let filtros = gerarFiltros();
};

// EXEMPLO URL:
// http://localhost:8000/pesquisa?filtro_campo=titulo&filtro_comparacao=contem&filtro_texto=Intelig%C3%AAncia+Artificial&filtro_campo=autor&filtro_comparacao=igual&filtro_texto=Mathias+Artur+Schulz