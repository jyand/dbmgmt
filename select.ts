import * as d from './doc.js' ;
import {initSelectForm} from './htm.js' ;

var sel: HTMLElement = d.Id("select") ;
var m: HTMLElement = d.Id("main") ;

function StringFromCriteria(): string {
        var crt = document.forms["container"] ;
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
        m.innerHTML = initSelectForm ;
        d.Id("top0").textContent = `SELECT *` ;
        d.Listen("tbl", "keyup", function(): void {
        //d.Id("tbl").addEventListener("keyup", function(): void {
                let s: string = document.forms["container"]["tblName"].value ;
                d.Id("top1").textContent = `FROM ${s}` ;
        }) ;
        d.Id("criteria").addEventListener("keyup", function(): void {
                d.Id("top2").textContent = StringFromCriteria() + " ;" ;
        }) ;
        d.Id("criteria").addEventListener("click", function(): void {
                d.Id("top2").textContent = `${StringFromCriteria()} ;` ;
        }) ;
}

sel.addEventListener("click", Main) ;
