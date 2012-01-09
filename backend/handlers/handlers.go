package handlers

import (
  "appengine"
  "backend/models"
)

func HellowWorld(w http.ResponseWriter, r *http.Request) {
  fmt.Fprint(w, "Hello, world!")
}
