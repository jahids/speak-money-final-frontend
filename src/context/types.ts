// types.ts

export interface Transaction {
	id: string;
	amount: number;
	category: string;
	type: string;
	date: string;
}

export interface Category {
	type: string;
	amount: number;
	color: string;
}
