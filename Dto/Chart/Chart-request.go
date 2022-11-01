package chartDto

type ChartRequest struct {
	Name      string `json:"name" form:"name" gorm:"type: varchar(255)" validate:"required"`
	Price     int    `json:"price" form:"price" gorm:"type: int" validate:"required"`
	ProductID int    `json:"product_id" form:"product_id" gorm:"type: varchar(255)" validate:"required"`
	BuyerID   int    `json:"buyer_id" form:"buyer_id"`
	SellerID  int    `json:"seller_id" form:"seller_id" gorm:"type: varchar(255)" validate:"required"`
}
