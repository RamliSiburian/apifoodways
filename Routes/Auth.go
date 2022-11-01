package Routes

import (
	"foodways/Handlers"
	middleware "foodways/Pkg/Middleware"
	"foodways/Pkg/Mysql"
	"foodways/Repositories"

	"github.com/gorilla/mux"
)

func AuthRoutes(r *mux.Router) {
	userRepository := Repositories.RepositoryAuth(Mysql.DB)
	h := Handlers.HandlerAuth(userRepository)

	r.HandleFunc("/Register", h.Register).Methods("POST")
	r.HandleFunc("/Login", h.Login).Methods("POST")
	r.HandleFunc("/check-auth", middleware.Auth(h.CheckAuth)).Methods("GET")
}
