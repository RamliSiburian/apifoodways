package Handlers

import (
	"encoding/json"
	chartDto "foodways/Dto/Chart"
	Dto "foodways/Dto/Result"
	"foodways/Models"
	"foodways/Repositories"
	"net/http"
	"strconv"

	"github.com/go-playground/validator/v10"
	"github.com/gorilla/mux"
)

type handlerChart struct {
	ChartRepository Repositories.ChartRepository
}

func HandlerChart(ChartRepository Repositories.ChartRepository) *handlerChart {
	return &handlerChart{ChartRepository}
}

func (h *handlerChart) CreateChart(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	request := new(chartDto.ChartRequest)

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := Dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	chart := Models.Chart{
		Name:      request.Name,
		Price:     request.Price,
		ProductID: request.ProductID,
		BuyerID:   request.BuyerID,
		SellerID:  request.SellerID,
	}

	chart, err = h.ChartRepository.CreateChart(chart)

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := Dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	chart, _ = h.ChartRepository.GetChart(chart.ID)

	w.WriteHeader(http.StatusOK)
	response := Dto.SuccessResult{Code: http.StatusOK, Data: chart}
	json.NewEncoder(w).Encode(response)
}

func (h *handlerChart) GetChart(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	user_id, _ := strconv.Atoi(mux.Vars(r)["user_id"])

	var chart Models.Chart
	chart, err := h.ChartRepository.GetChart(user_id)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := Dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	w.WriteHeader(http.StatusOK)
	response := Dto.SuccessResult{Code: http.StatusOK, Data: chart}
	json.NewEncoder(w).Encode(response)
}
