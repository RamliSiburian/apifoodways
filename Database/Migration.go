package Database

import (
	"fmt"
	"foodways/Models"
	"foodways/Pkg/Mysql"
)

func RunMigration() {
	err := Mysql.DB.AutoMigrate(&Models.User{}, &Models.Profile{}, &Models.Product{}, &Models.Chart{})

	if err != nil {
		fmt.Println(err)
		panic("Migrations Field")
	}
	fmt.Println("Migration Success")
}
