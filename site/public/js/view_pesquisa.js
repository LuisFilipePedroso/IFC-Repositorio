
// JAVASCRIPT UTILIZADO NA TELA DE PESQUISA DE TRABALHOS

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function addRow(tableID) {
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

function teste() {
    console.log('entrou no método');
}