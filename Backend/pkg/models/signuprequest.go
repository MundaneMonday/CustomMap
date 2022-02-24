package models

type SignupRequest struct {
	FirstName string ` json:"firstname" `
	LastName  string `json:"lastname"`
	Email     string `json:"email"`
	Password  string `json:"password"`
	Username  string `json:"username"`
}

type LoginRequest struct {
	Password string `json:"password"`
	Username string `json:"username"`
}
