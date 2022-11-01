package usersDto

type UserResponse struct {
	Email string `json:"email" form:"email" validation:"required"`
	// Password string `json:"password" form:"password" validation:"required"`
	Role string `json:"role" from:"role" validate:"required"`
}
