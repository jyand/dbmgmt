// HTML elements whose sub-elements are changed
var m = document.getElementById("main");
var t = document.getElementById("top");
var ins = document.getElementById("insert");
var cre = document.getElementById("create");
// textbox for the table name
function insertInto(e) {
    t.innerHTML = "INSERT INTO";
    m.innerHTML = '<form id="fields"><label for="field0"><input type="text" id="field0" name="field0"></form>';
}
// textboxes for inserting data into existing tables
/*function addFields(size: number): void {
        for (var i: number ; i < size ; ++i) {
        }
}*/
ins.addEventListener("click", insertInto);
