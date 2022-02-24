package models

type Response struct {
	Status string      ` json:"status" `
	Error  error       ` json:"error" `
	Data   interface{} ` json:"data" `
}
