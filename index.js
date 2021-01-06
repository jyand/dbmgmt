// HTML elements whose sub-elements are changed
var m = document.getElementById("main");
var t = document.getElementById("top").innerHTML;
var ins = document.getElementById("insert");
var cre = document.getElementById("create");
// textbox for the table name
function InsertInto(e) {
    m.innerHTML = '<form id="table"><label for="tableName">Table Name:<input type="text" id="tableName" name="tableName"></form></br>';
    m.innerHTML += '<form id="fields"><label for="field0">Fields:<input type="text" id="field0" name="field0"></form></br>';
    t = "INSERT INTO ";
    document.getElementById("tableName").addEventListener("keyup", ShowTableName);
}
// try appendChildNode or whatever
// or maybe forms[][]
function ShowTableName(e) {
    t += document.getElementById("tableName").textContent;
}
// textboxes for inserting data into existing tables
/*function addFields(size: number): void {
        for (var i: number ; i < size ; ++i) {
        }
}*/
ins.addEventListener("click", InsertInto);
