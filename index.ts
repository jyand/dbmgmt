// HTML elements whose sub-elements are changed
var m = document.getElementById("main") ;
//t = document.getElementById("top").innerHTML ;
var ins = document.getElementById("insert") ;
var cre = document.getElementById("create") ;

// textbox for the table name
function InsertInto(e): void {
        m.innerHTML = '<form id="table"><label for="tableName">Table Name:<input type="text" id="tableName" name="tableName"></form></br>' ;
        m.innerHTML += '<form id="fields"><label for="field0">Fields:<input type="text" id="field0" name="field0"></form></br>' ;
        document.getElementById("table").addEventListener("keyup", function() {
                let str = document.forms["table"]["tableName"].value + " (" ;
                document.getElementById("top").innerHTML = "INSERT INTO " + str ;
        }) ;
        document.getElementById("fields").addEventListener("keyup", function() {
                let f = document.forms["fields"] ;
                let s = "" ;
                for (var i: number ; i < f.length ; ++i) {
                        s += f[i] + ", " ;
                }
                document.getElementById("top").innerHTML += s ;
        }) ;
}

// textboxes for inserting data into existing tables
/*function addFields(size: number): void {
}*/

ins.addEventListener("click", InsertInto) ;
