package models

import "time"

type User struct {
	ID        string `gorm:"primary_key" json:"id"`
	FirstName string `gorm:"type:varchar(255);NOT NULL" json:"firstname" binding:"required"`
	LastName  string `gorm:"type:varchar(255);NOT NULL" json:"lastname" binding:"required"`
	Email     string `gorm:"type:varchar(255)" json:"email"`
	Password  string `gorm:"type:text" json:"password"`
	Username  string `gorm:"type:text" json:"username"`
	CreatedAt time.Time
	UpdatedAt time.Time
}

type Users []User
