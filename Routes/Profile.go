package Routes

import (
	"foodways/Handlers"
	middleware "foodways/Pkg/Middleware"
	"foodways/Pkg/Mysql"
	"foodways/Repositories"

	"github.com/gorilla/mux"
)

func ProfileRoutes(r *mux.Router) {
	profileRepositori := Repositories.RepositoryProfile(Mysql.DB)
	h := Handlers.HandlerProfile(profileRepositori)

	r.HandleFunc("/ProfileUser", h.FindProfile).Methods("GET")
	r.HandleFunc("/Profile/{id}", h.GetProfile).Methods("GET")
	r.HandleFunc("/Profile/{id}", middleware.UserImage(h.UpdateProfile)).Methods("PATCH")
	// r.HandleFunc("/Profile/{id}", h.UpdateProfile).Methods("PATCH")
	r.HandleFunc("/User/{id}", h.DeleteProfile).Methods("DELETE")

}
