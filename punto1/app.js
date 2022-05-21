function addRow() {
    var table = document.getElementById("myTableData");
    var producto = document.getElementById("producto");
    var precio = document.getElementById("precio");
    var iva = document.getElementById("iva");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= producto.value;
    row.insertCell(1).innerHTML= precio.value;
    row.insertCell(2).innerHTML= iva.value;
    row.insertCell(3).innerHTML= (((parseFloat(iva.value) + 100)/100)*parseFloat(precio.value));
}