/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable */
// import React, { useReducer, createContext, ReactNode, Dispatch } from "react";

// import contextReducer from "./contextReducer";

// interface Transaction {
//   amount: number;
//   category: string;
//   type: string;
//   date: string;
//   id: string;
// }

// interface ExpenseTrackerContextType {
//   transactions: Transaction[];
//   balance: number;
//   deleteTransaction: (id: string) => void;
//   addTransaction: (transaction: Transaction) => void;
// }

// const initialState: Transaction[] = JSON.parse(
//   localStorage.getItem("transactions")!
// ) || [
//   // Initial transactions here
// ];

// export const ExpenseTrackerContext = createContext<ExpenseTrackerContextType>({
//   transactions: initialState,
//   balance: 0,
//   deleteTransaction: () => {},
//   addTransaction: () => {},
// });

// interface ProviderProps {
//   children: ReactNode;
// }

// export const Provider: React.FC<ProviderProps> = ({ children }) => {
//   const [transactions, dispatch]: [Transaction[], Dispatch<any>] = useReducer(
//     contextReducer,
//     initialState
//   );



  


//   const deleteTransaction = (id: string) => {
//     dispatch({ type: "DELETE_TRANSACTION", payload: id });
//   };

//   const addTransaction = (transaction: Transaction) => {
//     dispatch({ type: "ADD_TRANSACTION", payload: transaction });
//   };

  

//   const balance = transactions.reduce(
//     (acc: number, currVal: Transaction) =>
//       currVal.type === "Expense" ? acc - currVal.amount : acc + currVal.amount,
//     0
//   );

//   const contextValue: ExpenseTrackerContextType = {
//     transactions,
//     balance,
//     deleteTransaction,
//     addTransaction,
//   };

//   return (
//     <ExpenseTrackerContext.Provider value={contextValue}>
//       {children}
//     </ExpenseTrackerContext.Provider>
//   );
// };


// added new code


import React, { useReducer, createContext, useEffect, FC, useState } from "react";
import contextReducer from "./contextReducer";
import axios from "axios";

export const ExpenseTrackerContext = createContext<any>(null);

interface Transaction {
	amount: number;
	category: string;
	type: string;
	date: string;
	id: string;
}

interface State {
	transactions: Transaction[];
	loading: boolean;
	error: string | null;

}

interface Action {
	type: string;
	payload?: any;
}

const initialState: State = {
	transactions: [], // Initialize transactions as an empty array
	loading: true,
	error: null,
	
};

export const Provider: FC<any> = ({ children }) => {
	const [state, dispatch] = useReducer(contextReducer, initialState);
	const storageData : any  = JSON.parse(localStorage.getItem('user'));
	const [userLogindata, setuserLogindata] = useState<any>([])
	

	useEffect(() => {

		let Mainid:any
		if(storageData?._id){
  Mainid = storageData?._id
		}else{
			Mainid=userLogindata?._id
		}

		console.log("user login data",userLogindata);
		dispatch({ type: "SET_LOADING" });

		axios
			.get(`http://localhost:7000/transactions/${Mainid}`)
			.then((response) => {
				dispatch({ type: "SET_INITIAL_STATE", payload: response.data });
			})
			.catch((error) => {
				dispatch({ type: "SET_ERROR", payload: error.message });
			})
			.finally(() => {
				dispatch({ type: "SET_LOADING", payload: false });
			});
	}, [storageData?._id, userLogindata, userLogindata?._id]);

	const deleteTransaction = async (id: string) => {
		try {
			await axios.delete(`http://localhost:7000/transactions/${id}`);
			dispatch({ type: "DELETE_TRANSACTION", payload: id });
		} catch (error) {
			console.error("Error deleting transaction:", error);
		}
	};

	const addTransaction = async (transaction: Transaction) => {
		try {
			const response = await axios.post(
				"http://localhost:7000/transactions",
				transaction
			);
			const newTransaction = response.data;
			dispatch({ type: "ADD_TRANSACTION", payload: newTransaction });
		} catch (error) {
			console.error("Error adding transaction:", error);
		}
	};

	const balance = state.transactions.reduce(
		(acc : any, currVal : any) =>
			currVal.type === "Expense"
				? acc - currVal.amount
				: acc + currVal.amount,
		0
	);

	return (
		<ExpenseTrackerContext.Provider
			value={{
				transactions: state.transactions,
				loading: state.loading,
				error: state.error,
				balance,
				addTransaction,
				deleteTransaction,
				setuserLogindata,
				userLogindata
			}}
		>
			{children}
		</ExpenseTrackerContext.Provider>
	);
};
