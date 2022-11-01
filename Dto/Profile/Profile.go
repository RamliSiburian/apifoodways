package profileDto

type ProfileRequest struct {
	Fullname string `gorm:"type: varchar(255)" json:"fullname" validate:"required"`
	Phone    string `gorm:"type: varchar(255)" json:"phone" validate:"required"`
	Address  string `gorm:"type:varchar(255)" json:"address" validate:"required"`
	Location string `gorm:"type:varchar(255)" json:"location" validate:"required"`
}

type UpdateProfileRequest struct {
	Fullname string `json:"fullname" form:"fullname"`
	Phone    string `json:"phone" form:"phone"`
	Address  string `json:"address" form:"address"`
	Location string `json:"location" form:"location"`
}
