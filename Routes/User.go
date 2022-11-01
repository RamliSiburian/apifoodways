package Routes

import (
	"foodways/Handlers"
	"foodways/Pkg/Mysql"
	"foodways/Repositories"

	"github.com/gorilla/mux"
)

func UserRoutes(r *mux.Router) {
	userRepositori := Repositories.RepositoryUser(Mysql.DB)
	h := Handlers.HandlerUsers(userRepositori)

	r.HandleFunc("/Users", h.FindUser).Methods("GET")
	r.HandleFunc("/User/{id}", h.GetUser).Methods("GET")
	r.HandleFunc("/User/{id}", h.UpdateUser).Methods("PATCH")
	r.HandleFunc("/User/{id}", h.DeleteUser).Methods("DELETE")

}
