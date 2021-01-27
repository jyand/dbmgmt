import * as d from './doc.js' ;
import {initInsertForm} from './htm.js' ;

var m: HTMLElement = d.Id("main") ;
var ins: HTMLElement = d.Id("insert") ;

function FixInput(): void {
        let n: number = document.forms["container"]["numinputs"].value ;
        if (n < 1) {
                n = 1 ;
                document.forms["container"]["numinputs"].value = n ;
        }
}

function IncrementInput(): void {
        d.Id("field").innerHTML = "" ;
        d.Id("value").innerHTML = "" ;
        let n: number = document.forms["container"]["numinputs"].value ;
        for (let i: number = 0 ; i < n ; ++i) {
                d.Id("field").innerHTML += `<label for="field${i}"><input type="text" id="field${i}" name="field${i}">` ;
                d.Id("value").innerHTML += `<label for="value${i}"><input type="text" id="value${i}" name="value${i}">` ;
        }
}

function StringFromInput(id: string): string {
        let f = document.forms[id] ;
        let N: number = f.length ;
        let s: string = "(" ;
        for (let i: number = 0 ; i < N ; ++i) {
                let v = f[`${id}${i}`].value ;
                if (id == "value" && isNaN(v)) {
                        s += `'${v}'` ;
                } else {
                        s += v ;
                }
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
        for (let i: number = 0 ; i < 3 ; ++i) {
                d.Id(`top${i}`).textContent = "" ;
        }
        m.innerHTML = initInsertForm ;
        //d.Id("table").addEventListener("keyup", function(): void {
        d.Listen("table", "keyup", function(): void {
                let s: string = document.forms["container"]["tableName"].value ;
                d.Id("top0").textContent = `INSERT INTO ${s}` ;
        }) ;
        d.Id("field").addEventListener("keyup", function(): void {
                d.Id("top1").textContent = StringFromInput("container") ;
        }) ;
        d.Id("value").addEventListener("keyup", function(): void {
                d.Id("top2").textContent = StringFromInput("container") ;
        }) ;
        d.Id("inputs").addEventListener("keyup", function(): void {
                FixInput() ;
        }) ;
        d.Id("inputs").addEventListener("click", function(): void {
                FixInput() ;
        }) ;
        d.Id("inputs").addEventListener("keyup", function(): void {
                IncrementInput() ;
        }) ;
        d.Id("inputs").addEventListener("click", function(): void {
                IncrementInput() ;
        }) ;
}

ins.addEventListener("click", Main) ;
