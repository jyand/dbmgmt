var m = document.getElementById("main") ;
var sel = document.getElementById("select") ;

function OperatorOptions(): string {
        const ops: string[] = ["(search)", "=", "!=", "<", ">", "<=", ">="] ;
        let s: string = '<select id="ops">' ;
        for (let i: number = 0 ; i < ops.length ; ++i) {
                s += `<option value="${ops[i]}">${ops[i]}</option>` ;
        }
        s += "</select>" ;
        return s ;
}

function StringFromCriteria(): string {
        var crt = document.forms["criteria"] ;
        var op = crt["ops"].value ;
        var cnd = crt["condition0"].value ;
        let s: string = `WHERE ${crt["criteria0"].value}` ;
        if (op == "(search)") {
                s += ` LIKE '%${cnd}%' ` ;
        } else {
                s += ` ${op} ` ;
                if (isNaN(cnd)) {
                        s += `'${cnd}'` ;
                } else {
                        s += `${cnd}` ;
                }
        }
        return s ;
}

function Main(e): void {
        m.innerHTML = '<form id="table"><label for="tableName"><p>Table:</p><input type="text" id="tableName" name="tableName"></form></br>' ;
        m.innerHTML += '<p>Criteria:</p><form id="criteria"><label for="criteria0"><input type="text" id="criteria0" name="criteria0">' + OperatorOptions() + '<label for="condition0"><input type="text" id="condition0" name="condition0"></form>' ;
        document.getElementById("top0").textContent = `SELECT *` ;
        document.getElementById("table").addEventListener("keyup", function(): void {
                let s: string = document.forms["table"]["tableName"].value ;
                document.getElementById("top1").textContent = `FROM ${s}` ;
        }) ;
        document.getElementById("criteria").addEventListener("keyup", function(): void {
                document.getElementById("top2").textContent = StringFromCriteria() + " ;" ;
        }) ;
        document.getElementById("criteria").addEventListener("click", function(): void {
                document.getElementById("top2").textContent = `${StringFromCriteria()} ;` ;
        }) ;
}

sel.addEventListener("click", Main) ;
