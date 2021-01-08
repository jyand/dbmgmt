var m = document.getElementById("main") ;
var sel = document.getElementById("select") ;

function StringFromFields(): string {
        let s: string = "SELECT " ;
        let N: number = document.forms["field"].length ;
        for (let i: number = 0 ; i < N ; ++i) {
                s += document.forms["field"][`field${i}`].value ;
                if (i < N - 1) {
                        s += ", " ;
                }
        }
        return s ;
}

function Main(e): void {
        m.innerHTML = '<p>Fields:</p><form id="field"><label for="field0"><input type="text" id="field0" name="field0" value="*"></form></br>' ;
        m.innerHTML += '<form id="table"><label for="tableName"><p>Table:</p><input type="text" id="tableName" name="tableName"></form></br>' ;
        m.innerHTML += '<p>Criteria:</p><form id="criteria"><label for="criteria0"><input type="text" id="criteria0" name="criteria0"></form></br>' ;
        document.getElementById("field").addEventListener("keyup", function(): void {
                // this part is a little buggy
                let s: string = StringFromFields() ;
                document.getElementById("top0").textContent = `SELECT ${s}` ;
        }) ;
        document.getElementById("table").addEventListener("keyup", function(): void {
                let s: string = document.forms["table"]["tableName"].value ;
                document.getElementById("top1").textContent = `FROM ${s}` ;
        }) ;
}

sel.addEventListener("click", Main) ;
