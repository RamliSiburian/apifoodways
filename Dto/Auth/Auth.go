package authDto

type RegisterRequest struct {
	Email    string `gorm:"type: varchar(255)" json:"email" validate:"required"`
	Password string `gorm:"type: varchar(255)" json:"password" validate:"required"`
	Role     string `gorm:"type:varchar(255)" json:"role" validate:"required"`
}

type LoginRequest struct {
	Email    string `gorm:"type: varchar(255)" json:"email" validate:"required"`
	Password string `gorm:"type: varchar(255)" json:"password" validate:"required"`
}
