var m = document.getElementById("main") ;
var ins = document.getElementById("insert") ;
var cre = document.getElementById("create") ;

function InsertInto(e): void {
        m.innerHTML = '<form id="table"><label for="tableName"><p>Table:</p><input type="text" id="tableName" name="tableName"></form></br>' ;
        m.innerHTML += '<form id="field"><label for="field0"><p>Fields:</p><input type="text" id="field0" name="field0"></form></br></br>' ;
        m.innerHTML += '<form id="fields"><label for="numfields">Number of Fields:<input type="number" id="numfields" name="numfields" value="1"></form></br>' ;
        m.innerHTML += '<form id="value"><label for="value0"><p>Values:</p><input type="text" id="value0" name="value0"></form></br></br>' ;
        m.innerHTML += '<form id="values"><label for="numvalues">Number of Values<input type="number" id="numvalues" name="numvalues" value="1"></form></br>' ;
        document.getElementById("table").addEventListener("keyup", function(): void {
                let str: string = document.forms["table"]["tableName"].value ;
                document.getElementById("tbl").textContent = "INSERT INTO " + str ;
        }) ;
        document.getElementById("field").addEventListener("keyup", function(): void {
                let f = document.forms["field"] ;
                let str: string = f["field0"].value ;
                /*for (var i: number ; i < f.length ; ++i) {
                        s += f[i].value + ", " ;
                }*/
                document.getElementById("fld").textContent = "(" + str + ")" + " VALUES" ;
        }) ;
        document.getElementById("fields").addEventListener("keyup", function(): void {
                FixInput("field") ;
        }) ;
        document.getElementById("fields").addEventListener("click", function(): void {
                FixInput("field") ;
        }) ;
        document.getElementById("value").addEventListener("keyup", function(): void {
                let v = document.forms["value"] ;
                let str: string = v["value0"].value ;
                /*for (var i: number ; i < v.length ; ++i) {
                        s += v[i].value + ", " ;
                }*/
                document.getElementById("val").textContent = "(" + str + ")" + ";" ;
        }) ;
        document.getElementById("values").addEventListener("keyup", function(): void {
                FixInput("value") ;
        }) ;
        document.getElementById("values").addEventListener("click", function(): void {
                FixInput("value") ;
        }) ;
}

function FixInput(id: string): void {
        let n: number = document.forms[`${id}s`][`num${id}s`].value ;
        if (n < 1) {
                n = 1 ;
                document.forms[`${id}s`][`num${id}s`].value = n ;
        }
}

/*function IncrementInput(id: string): void {
        let n: number = document.forms[`${id}s`][`num${id}s`].value ;
        if (n > 1) {
        }
}*/

// textboxes for inserting data into existing tables
/*function addFields(size: number): void {
}*/

ins.addEventListener("click", InsertInto) ;
