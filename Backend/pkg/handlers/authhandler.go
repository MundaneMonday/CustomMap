package handlers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/Farhanger9/backend_final_project/pkg/models"
)

func SignupHandler(w http.ResponseWriter, r *http.Request) {

	var p models.SignupRequest

	s, err := ioutil.ReadAll(r.Body)
	if err != nil {
		panic(err)
	}

	err = json.Unmarshal(s, &p)
	if err != nil {
		panic(err)
	}

	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "Category: %v\n", p)

}
