package repositories

import (
	"github.com/Farhanger9/backend_final_project/pkg/models"
	"gorm.io/gorm"
)

type UserRepository struct {
	db *gorm.DB
}

func NewUserRepository(db *gorm.DB) *UserRepository {
	return &UserRepository{db: db}
}

func (r *UserRepository) Save(contact *models.User) RepositoryResult {
	err := r.db.Save(contact).Error

	if err != nil {
		return RepositoryResult{Error: err}
	}

	return RepositoryResult{Result: contact}
}

func (r *UserRepository) FindAll() RepositoryResult {
	var Users models.Users

	err := r.db.Find(&Users).Error

	if err != nil {
		return RepositoryResult{Error: err}
	}

	return RepositoryResult{Result: &Users}
}

func (r *UserRepository) FindOneById(id int) RepositoryResult {
	var contact models.User

	err := r.db.Where(&models.User{ID: id}).Take(&contact).Error

	if err != nil {
		return RepositoryResult{Error: err}
	}

	return RepositoryResult{Result: &contact}
}

func (r *UserRepository) FindOneByUsername(username string) RepositoryResult {
	var user models.User

	err := r.db.Where(&models.User{Username: username}).Take(&user).Error

	if err != nil {
		return RepositoryResult{Error: err}
	}

	return RepositoryResult{Result: &user}
}

func (r *UserRepository) DeleteOneById(id int) RepositoryResult {
	err := r.db.Delete(&models.User{ID: id}).Error

	if err != nil {
		return RepositoryResult{Error: err}
	}

	return RepositoryResult{Result: nil}
}

func (r *UserRepository) DeleteByIds(ids *[]string) RepositoryResult {
	err := r.db.Where("ID IN (?)", *ids).Delete(&models.Users{}).Error

	if err != nil {
		return RepositoryResult{Error: err}
	}

	return RepositoryResult{Result: nil}
}
