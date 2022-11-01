package Repositories

import (
	"foodways/Models"

	"gorm.io/gorm"
)

type ChartRepository interface {
	CreateChart(chart Models.Chart) (Models.Chart, error)
	GetChart(ID int) (Models.Chart, error)
}

type chart struct {
	db *gorm.DB
}

func Repositorychart(db *gorm.DB) *chart {
	return &chart{db}
}

func (r *chart) CreateChart(chart Models.Chart) (Models.Chart, error) {
	err := r.db.Create(&chart).Error

	return chart, err
}
func (r *chart) GetChart(ID int) (Models.Chart, error) {
	var chart Models.Chart
	err := r.db.First(&chart, ID).Error

	return chart, err
}
