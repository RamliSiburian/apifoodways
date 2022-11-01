package Repositories

import (
	"foodways/Models"

	"gorm.io/gorm"
)

type UserRepository interface {
	FindUser() ([]Models.User, error)
	GetUser(ID int) (Models.User, error)
	UpdateUser(user Models.User) (Models.User, error)
	DeleteUser(user Models.User) (Models.User, error)
}

type users struct {
	db *gorm.DB
}

func RepositoryUser(db *gorm.DB) *users {
	return &users{db}
}

func (r *users) FindUser() ([]Models.User, error) {
	var user []Models.User
	err := r.db.Preload("Profile").Find(&user).Error

	return user, err
}
func (r *users) GetUser(ID int) (Models.User, error) {
	var user Models.User
	err := r.db.Preload("Profile").First(&user, ID).Error

	return user, err
}
func (r *users) UpdateUser(user Models.User) (Models.User, error) {
	err := r.db.Save(&user).Error

	return user, err
}

func (r *users) DeleteUser(user Models.User) (Models.User, error) {
	err := r.db.Delete(&user).Error

	return user, err
}

