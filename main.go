/* processing html form data the way one would with $_POST[] or $GET[] in php */
package main
import (
        //"fmt"
        "html/template"
        "net/http"
)

var t *template.Template

func init() {
        t = template.Must(template.ParseFiles("index.html"))
}

func Index(w http.ResponseWriter, r *http.Request) {
        t.ExecuteTemplate(w, "index.html", nil)
}

func ProcessForm(w http.ResponseWriter, r *http.Request) {
        if r.Method == "GET" {
                http.Redirect(w, r, "/", http.StatusSeeOther)
                return
        }
        //fmt.Println(r.FormValue("table"))
}

func main() {
        http.HandleFunc("/", Index)
        http.HandleFunc("/processform", ProcessForm)
        http.ListenAndServe(":9090", http.FileServer(http.Dir("./")))
}
