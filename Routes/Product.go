package Routes

import (
	"foodways/Handlers"
	middleware "foodways/Pkg/Middleware"
	"foodways/Pkg/Mysql"
	"foodways/Repositories"

	"github.com/gorilla/mux"
)

func ProductRoutes(r *mux.Router) {
	productRepository := Repositories.RepositoryProduct(Mysql.DB)
	h := Handlers.HandlerProduct(productRepository)

	r.HandleFunc("/products", middleware.Auth(h.FindProducts)).Methods("GET")
	r.HandleFunc("/product/{user_id}", h.GetProduct).Methods("GET")
	r.HandleFunc("/product", middleware.Auth(middleware.UploadFile(h.CreateProduct))).Methods("POST")
	r.HandleFunc("/product/{id}", middleware.Auth(h.DeleteProduct)).Methods("DELETE")
}
