package Repositories

import (
	"foodways/Models"

	"gorm.io/gorm"
)

type ProfileRepository interface {
	FindProfile() ([]Models.Profile, error)
	GetProfile(ID int) (Models.Profile, error)
	UpdateProfile(profile Models.Profile) (Models.Profile, error)
	DeleteProfile(profile Models.Profile) (Models.Profile, error)
}

func RepositoryProfile(db *gorm.DB) *users {
	return &users{db}
}
func (r *users) FindProfile() ([]Models.Profile, error) {
	var profile []Models.Profile
	err := r.db.Preload("User").Find(&profile).Error

	return profile, err
}
func (r *users) GetProfile(ID int) (Models.Profile, error) {
	var profile Models.Profile
	err := r.db.Preload("User").First(&profile, ID).Error

	return profile, err
}
func (r *users) UpdateProfile(profile Models.Profile) (Models.Profile, error) {
	err := r.db.Save(&profile).Error

	return profile, err
}
func (r *users) DeleteProfile(profile Models.Profile) (Models.Profile, error) {
	err := r.db.Delete(&profile).Error

	return profile, err
}
