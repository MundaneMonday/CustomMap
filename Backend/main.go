package main

import (
	"log"
	"net/http"
	"time"

	"github.com/Farhanger9/backend_final_project/pkg/database"
	"github.com/Farhanger9/backend_final_project/pkg/models"
	"github.com/Farhanger9/backend_final_project/pkg/repositories"
	"github.com/Farhanger9/backend_final_project/pkg/routes"
)

func main() {
	dbUser, dbPassword, dbName, dbHost, port := "admin", "G2zlvR6x", "student", "mysql-68346-0.cloudclusters.net", 12008

	db, err := database.ConnectToDB(dbUser, dbPassword, int16(port), dbName, dbHost)
	userRepository := repositories.NewUserRepository(db)

	srv := &http.Server{
		Handler: routes.RegisterRoutes(userRepository),
		Addr:    "0.0.0.0:8090",
		// Good practice: enforce timeouts for servers you create!
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	db.AutoMigrate(&models.User{})

	// unable to connect to database
	if err != nil {
		log.Fatalln(err)
	}

	log.Fatal(srv.ListenAndServe())

}
