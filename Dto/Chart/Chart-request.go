package chartDto

type ChartRequest struct {
	BuyerID   int `json:"buyer_id" form:"buyer_id" gorm:"type: varchar(255)"`
	ProductID int `json:"product_id" form:"product_id" gorm:"type: varchar(255)"`
	SellerID  int `json:"seller_id" form:"seller_id" gorm:"type: varchar(255)"`
	Qty       int `json:"qty" form:"qty" gorm:"type: varchar(255)"`
}

type UpdateChartRequest struct {
	// BuyerID   int `json:"buyer_id" form:"buyer_id" gorm:"type: varchar(255)"`
	// ProductID int `json:"product_id" form:"product_id" gorm:"type: varchar(255)"`
	// SellerID  int `json:"seller_id" form:"seller_id" gorm:"type: varchar(255)"`
	Qty int `json:"qty" form:"qty" gorm:"type: varchar(255)"`
}
