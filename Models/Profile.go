package Models

type Profile struct {
	ID       int          `json:"id" gorm:"primary_key:auto_increment"`
	Fullname string       `json:"fullname" gorm:"type: varchar(255)"`
	Phone    string       `json:"phone" gorm:"type: text"`
	Image    string       `json:"image" gorm:"type: varchar(255)"`
	Address  string       `json:"address" gorm:"type: text"`
	Location string       `json:"location" gorm:"type: text"`
	UserID   int          `json:"user_id"`
	User     UserResponse `json:"user" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
}

type ProfileResponse struct {
	UserID   int    `json:"user_id"`
	Fullname string `json:"fullname"`
	Phone    string `json:"phone"`
	Location string `json:"location"`
	Image    string `json:"image"`
	Address  string `json:"address"`
}

func (ProfileResponse) TableName() string {
	return "profiles"
}
