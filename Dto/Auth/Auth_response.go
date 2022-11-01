package authDto

type LoginResponse struct {
	Email    string `gorm:"type: varchar(255)" json:"email"`
	Role     string `gorm:"type: varchar(255)" json:"role"`
	// Password string `gorm:"type: varchar(255)" json:"password"`
	Token string `gorm:"type: varchar(255)" json:"token"`
}

type CheckAuthResponse struct {
	ID       int    `gorm:"type: int" json:"id"`
	Email    string `gorm:"type: varchar(255)" json:"email"`
	Role     string `gorm:"type: varchar(50)"  json:"role"`
}
