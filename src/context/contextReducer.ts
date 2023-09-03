/* eslint-disable */
// contextReducer.ts
import { Transaction } from "./types";

// const contextReducer = (state: any, action: any): any => {
// 	let transactions: any;

// 	switch (action.type) {
// 		case "DELETE_TRANSACTION":
// 			transactions = state.filter(
// 				(t: Transaction) => t.id !== action.payload
// 			);
// 			localStorage.setItem("transactions", JSON.stringify(transactions));
// 			return transactions;

// 		case "ADD_TRANSACTION":
// 			transactions = [action.payload, ...state];
// 			localStorage.setItem("transactions", JSON.stringify(transactions));
// 			return transactions;

// 		default:
// 			return state;
// 	}
// };

// new js

const contextReducer = (state: any, action: any) => {
	let transactions: any;

	switch (action.type) {
		case "SET_LOADING":
			return { ...state, loading: action.payload };

		case "SET_ERROR":
			return { ...state, error: action.payload };

		case "SET_INITIAL_STATE":
			return { ...state, transactions: action.payload };

		case "DELETE_TRANSACTION":
			transactions = state.transactions.filter(
				(t: any) => t._id !== action.payload
			);
			return { ...state, transactions };

		case "ADD_TRANSACTION":
			transactions = [action.payload, ...state.transactions];
			// localStorage.setItem("transactions", JSON.stringify(transactions));
			return { ...state, transactions };

		default:
			return state;
	}
};

export default contextReducer;
