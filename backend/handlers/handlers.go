package handlers

import (
  // "appengine"
  // "backend/models"
  "fmt"
  "http"
  "template"
)

var (
  indexTemplate = template.Must(template.ParseFile("frontend/index.html"))
)

func HelloWorld(w http.ResponseWriter, r *http.Request) {
  fmt.Fprint(w, "Hello, world!")
}

func Main(w http.ResponseWriter, r *http.Request) {
  indexTemplate.Execute(w, nil)
}
