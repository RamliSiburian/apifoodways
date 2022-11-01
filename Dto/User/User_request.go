package usersDto

type CreateUserRequest struct {
	Email    string `json:"email" form:"email" validate:"required"`
	Password string `json:"password" form:"password" validate:"required"`
	Role     string `json:"role" from:"role" validate:"required"`
}

type UpdateUserRequest struct {
	Email    string `json:"email" form:"email"`
	Password string `json:"password" form:"password"`
}
