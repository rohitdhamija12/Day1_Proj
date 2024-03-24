"use strict";

function Sumfun(){
    let id = document.getElementById("txtid").value;
    let name = document.getElementById("txtname").value;
    let age = document.getElementById("txtage").value;
    let newRow = document.createElement('tr')
    let idCell = document.createElement('td')
    idCell.textContent=id;
    newRow.appendChild(idCell);

    let nameCell = document.createElement('td')
    nameCell.textContent=name;
    newRow.appendChild(nameCell);

    let ageCell = document.createElement('td')
    ageCell.textContent=age;
    newRow.appendChild(ageCell);

    document.getElementById('outputtablebody').appendChild(newRow);

}
"use strict";

function Sumfun1() {
    let data = [['ID', 'Name', 'Age']];
    let tableRows = document.querySelectorAll('#outputtablebody tr');
    
    tableRows.forEach(row => {
        let rowData = [];
        row.querySelectorAll('td').forEach(cell => {
            rowData.push(cell.textContent);
        });
        data.push(rowData);
    });

    // Create a new workbook
    let wb = XLSX.utils.book_new();
    // Convert the data array to a worksheet
    let ws = XLSX.utils.aoa_to_sheet(data);
    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    // Save the workbook as an Excel file
    XLSX.writeFile(wb, "data.xlsx");
}
