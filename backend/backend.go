package backend

import (
	"backend/handlers"
	"http"
)

func init() {
	http.HandleFunc("/", handlers.HelloWorld)
}
