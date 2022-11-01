package Routes

import (
	"github.com/gorilla/mux"
)

func RounteInit(r *mux.Router) {
	UserRoutes(r)
	AuthRoutes(r)
	ProfileRoutes(r)
	ProductRoutes(r)
}
