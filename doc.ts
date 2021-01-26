const FORMID: string = "container" ;

// These are effectively aliases for DOM Methods but with strict typing
export function Id(s: string): HTMLElement | null {
        return document.getElementById(s) ;
}

export function Listen (s: string, e, func: EventListener): void {
        document.getElementById(s),addEventListener(e, func) ;
}

export function Tags(s: string): HTMLCollectionOf<Element> | null {
        return document.getElementsByTagName(s) ;
}

export function Form(input: string): string | number | boolean {
        return document.forms[FORMID][input].value ;
}

// for efficiently generating HTML in the page
export class InputElement {
        inputType: string ;
        inputId: string ;
        value: string | null ; 

        constructor(inputType: string, inputId: string, value: string | null) {
                this.inputType = inputType ;
                this.inputId = inputId ;
                this.value = value ;
        }

        NewElement(): void {
                let input: HTMLElement = document.createElement("input") ;
                document.getElementById(FORMID).appendChild(document.createElement("p").appendChild(input)) ;
                input.setAttribute("type", this.inputType) ;
                input.setAttribute("id", this.inputId) ;
                if (this.value != null) {
                        input.setAttribute("value", this.value) ;
                }
        }
}

export function BuildForms(prev: InputElement, n: number, i: number): void {
        if (n <= i) {
                return ;
        }
        prev.NewElement() ;
        let next = new InputElement(prev.inputType, `${prev.inputId}${i+1}`, null) ;
        BuildForms(next, n-1, i+1) ;
}
