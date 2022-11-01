package Routes

// import (
// 	"foodways/Handlers"
// 	"foodways/Pkg/Mysql"
// 	"foodways/Repositories"

// 	"github.com/gorilla/mux"
// )

// func ChartRoutes(r *mux.Router) {
// 	chartRepository := Repositories.Repositorychart(Mysql.DB)
// 	h := Handlers.HandlerProduct(chartRepository)

// 	r.HandleFunc("/Charts", h.CreateChart).Methods("POST")
// 	r.HandleFunc("/Chart/{id}", h.GetChart).Methods("GET")

// }
