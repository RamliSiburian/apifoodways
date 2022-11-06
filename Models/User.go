package Models

type User struct {
	ID       int                 `json:"id"`
	Email    string              `json:"email" gorm:"type: varchar(255)"`
	Password string              `json:"password" gorm:"type: varchar(255)"`
	Role     string              `json:"role" gorm:"type: varchar(255)"`
	Profile  ProfileResponse     `json:"profile"`
	Product  ProductUserResponse `json:"product"`
	Chart    []Chart             `json:"chart" gorm:"foreignKey:BuyerID"`
	Seller   []Chart             `json:"seller" gorm:"foreignKey:SellerID"`
}

type UserResponse struct {
	ID    int    `json:"id"`
	Role  string `json:"role"`
	Email string `json:"email"`
}

func (UserResponse) TableName() string {
	return "users"
}
