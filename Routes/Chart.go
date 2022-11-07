package Routes

import (
	"foodways/Handlers"
	"foodways/Pkg/Mysql"
	"foodways/Repositories"

	"github.com/gorilla/mux"
)

func ChartRoutes(r *mux.Router) {
	charts := Repositories.Repositorychart(Mysql.DB)
	h := Handlers.HandlerChart(charts)

	r.HandleFunc("/Charts", h.FindChart).Methods("GET")
	r.HandleFunc("/Chart/{id}", h.GetChart).Methods("GET")
	r.HandleFunc("/GetChart/{id}", h.GetCharts).Methods("GET")
	r.HandleFunc("/Chart/{id}", h.UpdateChart).Methods("PATCH")
	r.HandleFunc("/Chart", h.CreateChart).Methods("POST")
	r.HandleFunc("/Chart/{id}", h.DeleteChart).Methods("DELETE")

}
 