package backend

import (
	"backend/handlers"
	"http"
)

func init() {
  http.HandleFunc("/", handlers.Main)
	http.HandleFunc("/helloWorld", handlers.HelloWorld)
}
