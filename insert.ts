var m = document.getElementById("main") ;
var ins = document.getElementById("insert") ;

function FixInput(id: string): void {
        let n: number = document.forms[`${id}s`][`num${id}s`].value ;
        if (n < 1) {
                n = 1 ;
                document.forms[`${id}s`][`num${id}s`].value = n ;
        }
}

function IncrementInput(id: string): void {
        document.getElementById(id).innerHTML = "" ;
        let n: number = document.forms[`${id}s`][`num${id}s`].value ;
        for (let i: number = 0 ; i < n ; ++i) {
                document.getElementById(id).innerHTML += `<label for="${id}${i}"><input type="text" id="${id}${i}" name="${id}${i}">` ;
        }
}

function StringFromInput(id: string): string {
        let f = document.forms[id] ;
        let N: number = f.length ;
        let str: string = "(" ;
        for (let i: number = 0 ; i < N ; ++i) {
                str += f[`${id}${i}`].value ;
                if (i === N - 1) {
                        str += ")" ;
                } else {
                        str += ", " ;
                }
        }
        if (id === "field") {
                str += " VALUES" ;
        }
        if (id === "value") {
                str += " ;" ;
        }
        return str ;
}

function Main(e): void {
        m.innerHTML = '<form id="table"><label for="tableName"><p>Table:</p><input type="text" id="tableName" name="tableName"></form></br>' ;
        m.innerHTML += '<p>Fields:</p><form id="field"><label for="field0"><input type="text" id="field0" name="field0"></form></br></br>' ;
        m.innerHTML += '<form id="fields"><label for="numfields"><input type="number" id="numfields" name="numfields" value="1"></form></br>' ;
        m.innerHTML += '<p>Values:</p><form id="value"><label for="value0"><input type="text" id="value0" name="value0"></form></br></br>' ;
        m.innerHTML += '<form id="values"><label for="numvalues"><input type="number" id="numvalues" name="numvalues" value="1"></form></br>' ;
        document.getElementById("table").addEventListener("keyup", function(): void {
                let str: string = document.forms["table"]["tableName"].value ;
                document.getElementById("tbl").textContent = "INSERT INTO " + str ;
        }) ;
        document.getElementById("field").addEventListener("keyup", function(): void {
                document.getElementById("fld").textContent = StringFromInput("field") ;
        }) ;
        document.getElementById("fields").addEventListener("keyup", function(): void {
                FixInput("field") ;
        }) ;
        document.getElementById("fields").addEventListener("click", function(): void {
                FixInput("field") ;
        }) ;
        document.getElementById("fields").addEventListener("keyup", function(): void {
                IncrementInput("field") ;
        }) ;
        document.getElementById("fields").addEventListener("click", function(): void {
                IncrementInput("field") ;
        }) ;
        document.getElementById("value").addEventListener("keyup", function(): void {
                document.getElementById("val").textContent = StringFromInput("value") ;
        }) ;
        document.getElementById("values").addEventListener("keyup", function(): void {
                FixInput("value") ;
        }) ;
        document.getElementById("values").addEventListener("click", function(): void {
                FixInput("value") ;
        }) ;
        document.getElementById("values").addEventListener("keyup", function(): void {
                IncrementInput("value") ;
        }) ;
        document.getElementById("values").addEventListener("click", function(): void {
                IncrementInput("value") ;
        }) ;
}

ins.addEventListener("click", Main) ;
