package handlers

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

	"github.com/Farhanger9/backend_final_project/pkg/repositories"

	"github.com/Farhanger9/backend_final_project/pkg/models"
)

func SignupHandler(repo *repositories.UserRepository) http.HandlerFunc {

	return func(w http.ResponseWriter, r *http.Request) {

		var p models.SignupRequest

		s, err := ioutil.ReadAll(r.Body)
		if err != nil {
			panic(err)
		}

		err = json.Unmarshal(s, &p)
		if err != nil {
			panic(err)
		}
		var user models.User
		user.FirstName = p.FirstName
		user.LastName = p.LastName
		user.Email = p.Email
		user.Password = p.Password
		user.Username = p.Username

		result := repo.Save(&user)
		response := models.Response{}
		if result.Error != nil {
			response.Error = result.Error
			response.Status = "Failed"

		} else {
			response.Status = "Success"

		}
		response.Data = result.Result
		w.Header().Set("Content-Type", "application/json")

		w.WriteHeader(http.StatusOK)

		json.NewEncoder(w).Encode(response)

	}

}

func LoginHandler(repo *repositories.UserRepository) http.HandlerFunc {

	return func(w http.ResponseWriter, r *http.Request) {

		var p models.LoginRequest

		s, err := ioutil.ReadAll(r.Body)
		if err != nil {
			panic(err)
		}

		err = json.Unmarshal(s, &p)
		if err != nil {
			panic(err)
		}

		result := repo.FindOneByUsername(p.Username)
		response := models.Response{}
		if result.Error != nil {
			response.Error = result.Error
			response.Status = "User Not Found"

		} else {

			response.Status = "Success"

		}
		response.Data = result.Result
		w.Header().Set("Content-Type", "application/json")

		w.WriteHeader(http.StatusOK)

		json.NewEncoder(w).Encode(response)

	}

}
