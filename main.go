package main

import (
	"fmt"
	"foodways/Database"
	"foodways/Pkg/Mysql"
	"foodways/Routes"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

func main() {

	Mysql.DatabaseInit()

	Database.RunMigration()

	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	// fmt.Println(os.Getenv("PATH_FILE"))

	r := mux.NewRouter()

	Routes.RounteInit(r.PathPrefix("/api/v1/").Subrouter())

	r.PathPrefix("/uploads").Handler(http.StripPrefix("/uploads/", http.FileServer(http.Dir("./uploads"))))

	// Setup allowed Header, Method, and Origin for CORS on this below code ...
	var AllowedHeaders = handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	var AllowedMethods = handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "OPTIONS", "PATCH", "DELETE"})
	var AllowedOrigins = handlers.AllowedOrigins([]string{"*"})

	// var port = "5000"
	var port = os.Getenv("PORT")
	fmt.Println("server running :" + port)

	http.ListenAndServe(":"+port, handlers.CORS(AllowedHeaders, AllowedMethods, AllowedOrigins)(r))
}
