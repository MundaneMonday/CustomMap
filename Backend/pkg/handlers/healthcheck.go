package handlers

import (
	"encoding/json"
	"net/http"
)

type Response struct {
	Message string ` json:"message" `
	Content string ` json:"content" `
}

func Healthcheck(w http.ResponseWriter, r *http.Request) {
	response := Response{
		Message: "Api Running",
		Content: "/api/signup is a post api to signup the user ,/api/login to sign in the users",
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(&response)

}
