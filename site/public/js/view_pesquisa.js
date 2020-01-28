
// JAVASCRIPT UTILIZADO NA TELA DE PESQUISA DE TRABALHOS

// Formata a tabela
$(document).ready(function() {
    $('#tabela_trabalhos').DataTable();
} );

/**
 * Método responsável por remover uma linha da tabela de id deteminado
 * 
 * @param {string} botao 
 * @param {string} tabelaID 
 */
function deleteRow(botao, tabelaID)
{
    var numeroLinhas = document.getElementById(tabelaID).rows.length;
    var row = botao.parentNode.parentNode;
    row.parentNode.removeChild(row);
    if (numeroLinhas == 1) {
        addRow(tabelaID);
    }
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
        celulaCampo.id = "celula-campo";
        celulaCampo.innerHTML = ""
            + "<select class=\"custom-select mr-sm-2\" name=\"filtro_campo\">"
            + "<option value=\"titulo\" "          + ((element["campo"] == "titulo") ? "selected" : "") + ">Título</option>"
            + "<option value=\"autor\" "           + ((element["campo"] == "autor") ? "selected" : "") + ">Autor</option>"
            + "<option value=\"assunto\" "         + ((element["campo"] == "assunto") ? "selected" : "") + ">Assunto</option>"
            + "<option value=\"data_publicacao\" " + ((element["campo"] == "data_publicacao") ? "selected" : "") + ">Data de publicação</option>"
            + "</select>";

        let celulaComparacao = novaLinha.insertCell(1);
        celulaComparacao.id = "celula-comparacao";
        celulaComparacao.innerHTML = ""
            + "<select class=\"custom-select mr-sm-2\" name=\"filtro_comparacao\">"
            + "<option value=\"contem\""     + ((element["comparacao"] == "contem") ? "selected" : "") + ">Contém</option>"
            + "<option value=\"igual\""      + ((element["comparacao"] == "igual") ? "selected" : "") + ">Igual</option>"
            + "<option value=\"nao_contem\"" + ((element["comparacao"] == "nao_contem") ? "selected" : "") + ">Não contém</option>"
            + "</select>";
        
        let celulaTexto = novaLinha.insertCell(2);
        celulaTexto.id = "celula-texto";
        celulaTexto.innerHTML = "<input class=\"form-control mb-2 mr-sm-2\" name=\"filtro_texto\" type=\"text\" value=\"" 
                                + ((element["texto"] != "") ? element["texto"] : "") + "\" autocomplete=\"off\"/>";

        let celulaBotao = novaLinha.insertCell(3);
        celulaBotao.id = "celula-botao";
        celulaBotao.innerHTML = ""
            + "<button class=\"btn btn-danger\" type=\"button\" onclick=\"deleteRow(this, 'tabela_filtros_pesquisa_trabalho')\">"
            + "<i class=\"fas fa-minus-circle\"></i> Remover Filtro"
            + "</button>";
    });
}
