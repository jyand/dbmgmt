// HTML elements whose sub-elements are changed
const m = document.getElementById("main") ;
const t = document.getElementById("top") ;
const ins = document.getElementById("insert") ;
const cre = document.getElementById("create") ;

// textbox for the table name
function InsertInto(e): void {
        m.innerHTML = '<form id="table"><label for="tableName">Table Name:<input type="text" id="tableName" name="tableName"></form></br>' ;
        m.innerHTML += '<form id="fields"><label for="field0">Fields:<input type="text" id="field0" name="field0"></form></br>' ;
        t.innerHTML = "INSERT INTO" ;
}
// try appendChildNode or whatever
// or maybe forms[][]
function ShowTableName(e): void {
        t.innerHTML += document.getElementById("tableName").textContent + "VALUES" ;
}

// textboxes for inserting data into existing tables
/*function addFields(size: number): void {
        for (var i: number ; i < size ; ++i) {
        }
}*/

m.addEventListener("keyup", ShowTableName) ;
ins.addEventListener("click", InsertInto) ;
