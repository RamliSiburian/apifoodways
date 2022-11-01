package Models

type Chart struct {
	ID        int             `json:"id" gorm:"primary_key:auto_increment"`
	Name      string          `json:"name" form:"name" gorm:"type: varchar(255)"`
	Price     int             `json:"price" form:"price" gorm:"type: int"`
	ProductID int             `json:"product_id" form:"product_id"`
	BuyerID   int             `json:"buyer_id" form:"buyer_id"`
	SellerID  int             `json:"seller_id" form:"seller_id"`
	User      UserResponse    `json:"user"`
	Product   ProductResponse `json:"product"`
}

type ChartResponse struct {
	ID        int    `json:"id"`
	Name      string `json:"name"`
	Price     int    `json:"price"`
	ProductID int    `json:"-"`
	BuyerID   int    `json:"-"`
	SellerID  string `json:"seller_id"`
}

func (ChartResponse) TableName() string {
	return "charts"
}
