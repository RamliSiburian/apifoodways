package Repositories

import (
	"foodways/Models"

	"gorm.io/gorm"
)

type ProductRepository interface {
	FindProducts() ([]Models.Product, error)
	GetProduct(ID int) (Models.Product, error)
	GetProductUser(UserID int) ([]Models.Product, error)
	CreateProduct(product Models.Product) (Models.Product, error)
	DeleteProduct(product Models.Product) (Models.Product, error)
}

func RepositoryProduct(db *gorm.DB) *users {
	return &users{db}
}

func (r *users) FindProducts() ([]Models.Product, error) {
	var products []Models.Product
	err := r.db.Preload("User").Find(&products).Error

	return products, err
}

func (r *users) GetProductUser(UserID int) ([]Models.Product, error) {
	var product []Models.Product
	err := r.db.Where("user_id=?", UserID).Preload("User").Find(&product).Error

	return product, err
}
func (r *users) GetProduct(ID int) (Models.Product, error) {
	var product Models.Product
	err := r.db.Preload("User").First(&product, ID).Error

	return product, err
}

func (r *users) CreateProduct(product Models.Product) (Models.Product, error) {
	err := r.db.Create(&product).Error

	return product, err
}

func (r *users) DeleteProduct(product Models.Product) (Models.Product, error) {
	err := r.db.Delete(&product).Error

	return product, err
}
