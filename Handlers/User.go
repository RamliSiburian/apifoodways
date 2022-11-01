package Handlers

import (
	"encoding/json"
	Dto "foodways/Dto/Result"
	usersDto "foodways/Dto/User"
	"foodways/Pkg/Bcrypt"
	"foodways/Repositories"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

type handleruser struct {
	UserRepository Repositories.UserRepository
}

func HandlerUsers(UserRepository Repositories.UserRepository) *handleruser {
	return &handleruser{UserRepository}
}

func (h *handleruser) FindUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	user, err := h.UserRepository.FindUser()
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := Dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	w.WriteHeader(http.StatusOK)
	response := Dto.SuccessResult{Code: http.StatusOK, Data: user}
	json.NewEncoder(w).Encode(response)
}
func (h *handleruser) GetUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	id, _ := strconv.Atoi(mux.Vars(r)["id"])
	user, err := h.UserRepository.GetUser(id)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := Dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	w.WriteHeader(http.StatusOK)
	response := Dto.SuccessResult{Code: http.StatusOK, Data: user}
	json.NewEncoder(w).Encode(response)
}

func (h *handleruser) UpdateUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	request := new(usersDto.UpdateUserRequest)
	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := Dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	id, _ := strconv.Atoi(mux.Vars(r)["id"])
	user, err := h.UserRepository.GetUser(int(id))
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := Dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	if request.Email != "" {
		user.Email = request.Email
	}
	password, err := Bcrypt.HashingPassword(request.Password)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := Dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
	}

	if request.Password != "" {
		user.Password = password

	}

	data, err := h.UserRepository.UpdateUser(user)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := Dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	w.WriteHeader(http.StatusOK)
	response := Dto.SuccessResult{Code: http.StatusOK, Data: data}
	json.NewEncoder(w).Encode(response)
}

func (h *handleruser) DeleteUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	id, _ := strconv.Atoi(mux.Vars(r)["id"])
	user, err := h.UserRepository.GetUser(id)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := Dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	data, err := h.UserRepository.DeleteUser(user)

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := Dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	w.WriteHeader(http.StatusOK)
	response := Dto.SuccessResult{Code: http.StatusOK, Data: data}
	json.NewEncoder(w).Encode(response)
}
