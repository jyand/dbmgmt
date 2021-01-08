var m = document.getElementById("main") ;
var ins = document.getElementById("insert") ;

function FixInput(): void {
        let n: number = document.forms["inputs"]["numinputs"].value ;
        if (n < 1) {
                n = 1 ;
                document.forms["inputs"]["numinputs"].value = n ;
        }
}

function IncrementInput(): void {
        document.getElementById("field").innerHTML = "" ;
        document.getElementById("value").innerHTML = "" ;
        let n: number = document.forms["inputs"]["numinputs"].value ;
        for (let i: number = 0 ; i < n ; ++i) {
                document.getElementById("field").innerHTML += `<label for="field${i}"><input type="text" id="field${i}" name="field${i}">` ;
                document.getElementById("value").innerHTML += `<label for="value${i}"><input type="text" id="value${i}" name="value${i}">` ;
        }
}

function StringFromInput(id: string): string {
        let f = document.forms[id] ;
        let N: number = f.length ;
        let s: string = "(" ;
        for (let i: number = 0 ; i < N ; ++i) {
                s += f[`${id}${i}`].value ;
                if (i === N - 1) {
                        s += ")" ;
                } else {
                        s += ", " ;
                }
        }
        if (id === "field") {
                s += " VALUES" ;
        }
        if (id === "value") {
                s += " ;" ;
        }
        return s ;
}

function Main(e): void {
        m.innerHTML = '<form id="table"><label for="tableName"><p>Table:</p><input type="text" id="tableName" name="tableName"></form></br>' ;
        m.innerHTML += '<p>Fields:</p><form id="field"><label for="field0"><input type="text" id="field0" name="field0"></form></br>' ;
        m.innerHTML += '<p>Values:</p><form id="value"><label for="value0"><input type="text" id="value0" name="value0"></form></br>' ;
        m.innerHTML += '<p>Inputs:</p><form id="inputs"><label for="numinputs"><input type="number" id="numinputs" name="numinputs" value="1"></form></br>' ;
        document.getElementById("table").addEventListener("keyup", function(): void {
                let s: string = document.forms["table"]["tableName"].value ;
                document.getElementById("top0").textContent = `INSERT INTO ${s}` ;
        }) ;
        document.getElementById("field").addEventListener("keyup", function(): void {
                document.getElementById("top1").textContent = StringFromInput("field") ;
        }) ;
        document.getElementById("value").addEventListener("keyup", function(): void {
                document.getElementById("top2").textContent = StringFromInput("value") ;
        }) ;
        document.getElementById("inputs").addEventListener("keyup", function(): void {
                FixInput() ;
        }) ;
        document.getElementById("inputs").addEventListener("click", function(): void {
                FixInput() ;
        }) ;
        document.getElementById("inputs").addEventListener("keyup", function(): void {
                IncrementInput() ;
        }) ;
        document.getElementById("inputs").addEventListener("click", function(): void {
                IncrementInput() ;
        }) ;
}

ins.addEventListener("click", Main) ;
