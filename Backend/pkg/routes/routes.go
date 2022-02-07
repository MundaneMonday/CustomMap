package routes

import (
	"github.com/Farhanger9/backend_final_project/pkg/handlers"
	"github.com/gorilla/mux"
)

func RegisterRoutes() *mux.Router {

	r := mux.NewRouter()
	r.HandleFunc("/api/signup", handlers.SignupHandler).Methods("POST")
	return r

}
