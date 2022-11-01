package Handlers

import (
	"encoding/json"
	profileDto "foodways/Dto/Profile"
	Dto "foodways/Dto/Result"
	"foodways/Models"
	"foodways/Repositories"
	"net/http"
	"os"
	"strconv"

	"github.com/gorilla/mux"
)

type handlerprofile struct {
	ProfileRepository Repositories.ProfileRepository
}

func HandlerProfile(ProfileRepository Repositories.ProfileRepository) *handlerprofile {
	return &handlerprofile{ProfileRepository}
}

func (h *handlerprofile) FindProfile(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	user, err := h.ProfileRepository.FindProfile()
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := Dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}
	for i, p := range user {
		user[i].Image = os.Getenv("PATH_FILE_USERS") + p.Image
	}

	w.WriteHeader(http.StatusOK)
	response := Dto.SuccessResult{Code: http.StatusOK, Data: user}
	json.NewEncoder(w).Encode(response)
}
func (h *handlerprofile) GetProfile(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	id, _ := strconv.Atoi(mux.Vars(r)["id"])
	var user Models.Profile
	user, err := h.ProfileRepository.GetProfile(id)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := Dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	user.Image = os.Getenv("PATH_FILE_USERS") + user.Image

	w.WriteHeader(http.StatusOK)
	response := Dto.SuccessResult{Code: http.StatusOK, Data: user}
	json.NewEncoder(w).Encode(response)
}

func (h *handlerprofile) UpdateProfile(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	userImage := r.Context().Value("dataFile")
	filename := userImage.(string)

	request := profileDto.UpdateProfileRequest{
		Fullname: r.FormValue("fullname"),
		Phone:    r.FormValue("phone"),
		Address:  r.FormValue("address"),
		Location: r.FormValue("location"),
	}

	id, _ := strconv.Atoi(mux.Vars(r)["id"])
	user, err := h.ProfileRepository.GetProfile(int(id))
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := Dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	if request.Fullname != "" {
		user.Fullname = request.Fullname
	}

	if request.Phone != "" {
		user.Phone = request.Phone
	}

	if filename != "" {
		user.Image = filename

	}

	if request.Address != "" {
		user.Address = request.Address

	}
	if request.Location != "" {
		user.Location = request.Location

	}

	data, err := h.ProfileRepository.UpdateProfile(user)
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

func (h *handlerprofile) DeleteProfile(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	id, _ := strconv.Atoi(mux.Vars(r)["user_id"])
	user, err := h.ProfileRepository.GetProfile(id)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := Dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	data, err := h.ProfileRepository.DeleteProfile(user)

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
