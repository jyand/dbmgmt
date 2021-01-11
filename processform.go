/* processing html form data the way one would with $_POST[] or $GET[] in php */
package main
import (
        "html/template"
        "net/http"
)

type Info struct {
        //can we make a struct that contains an arbitray length array?
}

func main() {
        t := template.Must(template.ParseFiles("index.htm"))
        http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
                if r.Method != http.MethodPost {
                        t.Execute(w, nil)
                        return
                }
                stuff := Info {
                        InfoProperty: r.FormValue("formname"),
                        // ...etc
                }
                // process stuff however
                _ = details
                t.Execute(w, struct{ Success bool }{true})
        })
        http.ListenAndServe(":8080", nil)
}
