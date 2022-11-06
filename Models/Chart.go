package Models

type Chart struct {
	ID        int             `json:"id" gorm:"primary_key:auto_increment"`
	SellerID  int             `json:"seller_id" form:"seller_id"`
	BuyerID   int             `json:"buyer_id" form:"buyer_id"`
	ProductID int             `json:"product_id" form:"product_id"`
	Qty       int             `json:"qty" form:"qty"`
	Buyer     UserResponse    `json:"buyer"`
	Product   ProductResponse `json:"product"`
}

type ChartResponse struct {
	ID        int    `json:"id"`
	ProductID int    `json:"product_id"`
	BuyerID   int    `json:"buyer_id"`
	SellerID  string `json:"seller_id"`
	Qty       int    `json:"qty"`
}

func (ChartResponse) TableName() string {
	return "charts"
}
