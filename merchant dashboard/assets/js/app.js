// const getDistrict = document.getElementById("district")
// const getCollection = document.getElementById("collection")
// const getDisplayCod = document.getElementById("displayCod")
// const getDisplayTotal = document.getElementById("displayTotal")
// const getDisplayCharge = document.getElementById("displayCharge")

// let cod = 1;
// let districtCharge;
// let collectAmount;
// let displayCOD;

// getDistrict.addEventListener("input", (e) =>{
//     districtCharge=Number(e.target.value)
// })

// getCollection.addEventListener("input",(e) =>{
//     collectAmount=Number(e.target.value)
//     displayCOD=collectAmount * (cod/100)
//     getDisplayCod.innerHTML=displayCOD.toFixed(2)
//     getDisplayCharge.innerHTML=districtCharge
//     getDisplayTotal.innerHTML=(displayCOD+districtCharge).toFixed(2)
// })


// Excel File Reder JS
var input = document.getElementById('bulk-excel');
input.addEventListener('change', function () {
    readXlsxFile(input.files[0]).then(function (data) {
        var i = 0;
        data.map((row, index) => {
            if (i == 0) {
                let table = document.getElementById('tbl-data');
                generateTableHead(table, row);
            }

            if (i > 0) {
                let table = document.getElementById('tbl-data');
                generateTableRows(table, row);
            }

            i++;
        });
    });
});

function generateTableHead(table, data) {
    let tbody = table.createTBody();
    let row = tbody.insertRow();
    for (let key of data) {
        let th = document.createElement('th');
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTableRows(table, data) {
    let newRow = table.insertRow(-1);
    data.map((row, index) => {
        let newCell = newRow.insertCell();
        let newText = document.createTextNode(row);
        newCell.appendChild(newText);
    });

}