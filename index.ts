var m = document.getElementById("main") ;
var ins = document.getElementById("insert") ;
var cre = document.getElementById("create") ;

function InsertInto(e): void {
        m.innerHTML = '<form id="table"><label for="tableName"><p>Table:</p><input type="text" id="tableName" name="tableName"></form></br>' ;
        m.innerHTML += '<form id="field"><label for="field0"><p>Fields:</p><input type="text" id="field0" name="field0"></form></br></br>' ;
        m.innerHTML += '<form id="fields"><label for="numFields">Number of Fields:<input type="number" id="numFields" name="numFields"></form></br>' ;
        m.innerHTML += '<form id="value"><label for="value0"><p>Values:</p><input type="text" id="value0" name="value"></form></br>' ;
        m.innerHTML += '<form id="values"><label for="value0">Number of Values<input type="number" id="value0" name="value"></form></br></br>' ;
        document.getElementById("table").addEventListener("keyup", function() {
                let str: string = document.forms["table"]["tableName"].value ;
                document.getElementById("tbl").textContent = "INSERT INTO " + str ;
        }) ;
        document.getElementById("field").addEventListener("keyup", function() {
                let f = document.forms["field"] ;
                let str: string = f["field0"].value ;
                /*for (var i: number ; i < f.length ; ++i) {
                        s += f[i].value + ", " ;
                }*/
                document.getElementById("fld").textContent = "(" + str + ")" + " VALUES" ;
        }) ;
        document.getElementById("value").addEventListener("keyup", function() {
                let v = document.forms["value"] ;
                let str: string = v["value0"].value ;
                /*for (var i: number ; i < v.length ; ++i) {
                        s += v[i].value + ", " ;
                }*/
                document.getElementById("val").textContent = "(" + str + ")" + ";" ;
        }) ;
}

function IncrementInput(el): void {
}

// textboxes for inserting data into existing tables
/*function addFields(size: number): void {
}*/

ins.addEventListener("click", InsertInto) ;
