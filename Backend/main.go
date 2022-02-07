package main

import (
	"log"
	"net/http"
	"time"

	"github.com/Farhanger9/backend_final_project/pkg/database"
	"github.com/Farhanger9/backend_final_project/pkg/routes"
)

func main() {

	srv := &http.Server{
		Handler: routes.RegisterRoutes(),
		Addr:    "127.0.0.1:8000",
		// Good practice: enforce timeouts for servers you create!
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}
	dbUser, dbPassword, dbName := "root", "1234", "student"

	_, err := database.ConnectToDB(dbUser, dbPassword, dbName)

	// unable to connect to database
	if err != nil {
		log.Fatalln(err)
	}

	log.Fatal(srv.ListenAndServe())

}
