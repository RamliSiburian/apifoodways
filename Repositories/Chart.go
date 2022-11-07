package Repositories

import (
	"foodways/Models"

	"gorm.io/gorm"
)

type ChartRepository interface {
	FindChart() ([]Models.Chart, error)
	CreateChart(chart Models.Chart) (Models.Chart, error)
	GetChart(BuyerID int) (Models.Chart, error)
	GetCharts(ID int) (Models.Chart, error)
	GetChartUser(BuyerID int) ([]Models.Chart, error)
	UpdateChart(chart Models.Chart) (Models.Chart, error)
	DeleteChart(chart Models.Chart) (Models.Chart, error)
}

type chart struct {
	db *gorm.DB
}

func Repositorychart(db *gorm.DB) *chart {
	return &chart{db}
}

func (r *chart) FindChart() ([]Models.Chart, error) {
	var charts []Models.Chart
	err := r.db.Preload("Buyer").Preload("Product").Find(&charts).Error

	return charts, err
}

func (r *chart) CreateChart(chart Models.Chart) (Models.Chart, error) {
	err := r.db.Create(&chart).Error

	return chart, err
}
func (r *chart) GetChart(BuyerID int) (Models.Chart, error) {
	var chart Models.Chart
	err := r.db.Where("buyer_id=?", BuyerID).Preload("Buyer").Preload("Product").First(&chart, BuyerID).Error

	return chart, err
}

func (r *chart) GetChartUser(BuyerID int) ([]Models.Chart, error) {
	var chart []Models.Chart
	err := r.db.Where("buyer_id=?", BuyerID).Preload("Buyer").Preload("Product").Find(&chart).Error

	return chart, err
}
func (r *chart) GetCharts(ID int) (Models.Chart, error) {
	var chart Models.Chart
	err := r.db.First(&chart, ID).Error

	return chart, err
}
func (r *chart) UpdateChart(chart Models.Chart) (Models.Chart, error) {
	err := r.db.Save(&chart).Error

	return chart, err
}
func (r *chart) DeleteChart(chart Models.Chart) (Models.Chart, error) {
	err := r.db.Delete(&chart).Error

	return chart, err
}
 