package routes

import (
	"github.com/Farhanger9/backend_final_project/pkg/handlers"
	"github.com/Farhanger9/backend_final_project/pkg/repositories"
	"github.com/gorilla/mux"
)

func RegisterRoutes(userRepository *repositories.UserRepository) *mux.Router {

	r := mux.NewRouter()
	r.HandleFunc("/api/health", handlers.Healthcheck).Methods("GET")
	r.HandleFunc("/api/signup", handlers.SignupHandler(userRepository)).Methods("POST")
	r.HandleFunc("/api/login", handlers.LoginHandler(userRepository)).Methods("POST")
	return r

}
