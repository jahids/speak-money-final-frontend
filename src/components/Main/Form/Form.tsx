/* eslint-disable */
// /* eslint-disable */
// import React, { useContext, useEffect, useState } from 'react';
// import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';
// import Button from '@material-ui/core/Button';
// import Slide from '@material-ui/core/Slide';
// import { v4 as uuidv4 } from 'uuid';
// import { motion } from 'framer-motion';
// import { ExpenseTrackerContext } from '../../../context/context';
// import { incomeCategories, expenseCategories } from '../../../constants/categories';
// import { useSpeechContext } from '@speechly/react-client';
// import formatDate from '../../../utils/formatDate';

// interface FormData {
//   amount: string;
//   category: string;
//   type: string;
//   date: Date | string | any;
// }

// const initialState: FormData = {
//   amount: '',
//   category: '',
//   type: 'Income',
//   date: formatDate(new Date()), // Format the date as "YYYY-MM-DD"
// };

// const Form: React.FC = () => {
//   const { segment } = useSpeechContext();
//   const [formData, setFormData] = useState<FormData>(initialState);
//   const [selectedType, setSelectedType] = useState(initialState.type);

//   const createTransaction = () => {
//     if (Number.isNaN(Number(formData.amount)) || !formData.date.includes('-') || formData.category=='' || formData.amount==='')
//                  return;

//     if (incomeCategories.map((iC) => iC.type).includes(formData.category)) {
//       setFormData({ ...formData, type: 'Income' });
//     } else if (expenseCategories.map((iC) => iC.type).includes(formData.category)) {
//       setFormData({ ...formData, type: 'Expense' });
//     }

//     addTransaction({ ...formData, amount: Number(formData.amount), id: uuidv4()});
//     setFormData(initialState);
//   };

//   useEffect(() => {
//     if (segment) {
//       if (segment.intent.intent === 'add_expense') {
//         setFormData({ ...formData, type: 'Expense' });
//       } else if (segment.intent.intent === 'add_income') {
//         setFormData({ ...formData, type: 'Income' });
//       } else if (segment.isFinal && segment.intent.intent === 'create_transaction') {
//         return createTransaction();
//       } else if (segment.isFinal && segment.intent.intent === 'cancel_transaction') {
//         return setFormData(initialState);
//       }

//       segment.entities.forEach((s) => {
//         const category = `${s.value.charAt(0)}${s.value.slice(1).toLowerCase()}`;

//         switch (s.type) {
//           case 'amount':
//             setFormData({ ...formData, amount: s.value });
//             break;
//           case 'category':
//             if (incomeCategories.map((iC) => iC.type).includes(category)) {
//               setFormData({ ...formData, type: 'Income', category });
//             } else if (expenseCategories.map((iC) => iC.type).includes(category)) {
//               setFormData({ ...formData, type: 'Expense', category });
//             }
//             break;
//           case 'date':
//             setFormData({ ...formData, date: s.value });
//             break;
//           default:
//             break;
//         }
//       });

//       if (segment.isFinal && formData.amount && formData.category && formData.type && formData.date) {
//         createTransaction();
//       }
//     }
//   }, [segment]);

//   const { addTransaction } = useContext(ExpenseTrackerContext);

//   const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;

//   return (
//     <motion.form
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -50 }}
//       className="w-full max-w-md mx-auto p-4 space-y-4 bg-white rounded shadow">
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <TextField
//             name="type"
//             select
//             label="Type"
//             value={formData.type}
//             onChange={(e) => setFormData({ ...formData, type: e.target.value })}
//             fullWidth
//           >
//             <MenuItem value="Income">Income</MenuItem>
//             <MenuItem value="Expense">Expense</MenuItem>
//           </TextField>
//         </div>
//         <div>
//           <TextField
//             name="category"
//             select
//             label="Category"
//             value={formData.category}
//             // onChange={handleInputChange}
//             onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//             fullWidth
//           >
//             {selectedCategories.map((c) => (
//               <MenuItem key={c.type} value={c.type}>
//                 {c.type}
//               </MenuItem>
//             ))}
//           </TextField>
//         </div>
//       </div>
//       <TextField
//         name="amount"
//         label="Amount"
//         type="number"
//         fullWidth
//         value={formData.amount}
//         onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
//         // onChange={handleInputChange}
//       />
//       <TextField
//         name="date"
//         label="Date"
//         type="date"
//         fullWidth
//         value={formData.date}
//         onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })}
//         // onChange={handleInputChange}
//       />
//       <Button onClick={createTransaction}  variant="contained" color="primary" fullWidth>
//         Create
//       </Button>
//     </motion.form>
//   );
// };

// export default Form;

// workable project

import React, { useState, useContext, useEffect } from "react";
import { useSpeechSynthesis } from 'react-speech-kit';
import {
	TextField,
	Grid,
	Button,
	FormControl,           
	InputLabel,
	Select,
	MenuItem,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

import { useSpeechContext } from "@speechly/react-client";
import Snackbar from "../../Snackbar/Snackbar";

import { ExpenseTrackerContext } from "../../../context/context";
import {
	incomeCategories,
	expenseCategories,
} from "../../../constants/categories";
import useStyles from "./styles";
import formatDate from "../../../utils/formatDate";

const initialState = {
	amount: "",
	category: "",
	type: "Income",
	date: formatDate(new Date()),
};

const Form: React.FC = () => {
	const classes = useStyles();
	const { addTransaction } = useContext(ExpenseTrackerContext);
	const [formData, setFormData] = useState(initialState);
	const { segment } = useSpeechContext();
	const { speak } = useSpeechSynthesis();
	const [open, setOpen] = React.useState(false);
 
	const storageData : any  = JSON.parse(localStorage.getItem('user')) ;

	console.log("storagedata", storageData);

	const createTransaction = () => {
		if (
			Number.isNaN(Number(formData.amount)) ||
			!formData.date.includes("-") ||
			formData.category === "" ||
			formData.amount === ""
		)
			return;

		if (incomeCategories.map((iC) => iC.type).includes(formData.category)) {
			setFormData({ ...formData, type: "Income" });
		} else if (
			expenseCategories.map((iC) => iC.type).includes(formData.category)
		) {
			setFormData({ ...formData, type: "Expense" });
		}
		setOpen(true);
    console.log("data transact",{
			...formData,
			amount: Number(formData.amount),
			id: uuidv4(),
		} )
    
		addTransaction({
			...formData,
			amount: Number(formData.amount),
			userid: storageData?._id,
		});
		speak({ text: `you add ${formData?.type} ${Number(formData.amount)} ` })

		setFormData(initialState);

	};

	useEffect(() => {
		if (segment) {
			if (segment.intent.intent === "add_expense") {
				setFormData({ ...formData, type: "Expense" });
			} else if (segment.intent.intent === "add_income") {
				setFormData({ ...formData, type: "Income" });
			} else if (
				segment.isFinal &&
				segment.intent.intent === "create_transaction"
			) {
				return createTransaction();
			} else if (
				segment.isFinal &&
				segment.intent.intent === "cancel_transaction"
			) {
				return setFormData(initialState);
			}

			segment.entities.forEach((s) => {
				const category = `${s.value.charAt(0)}${s.value
					.slice(1)
					.toLowerCase()}`;

				switch (s.type) {
					case "amount":
						setFormData({ ...formData, amount: s.value });
						break;
					case "category":
						if (
							incomeCategories
								.map((iC) => iC.type)
								.includes(category)
						) {
							setFormData({
								...formData,
								type: "Income",
								category,
							});
						} else if (
							expenseCategories
								.map((iC) => iC.type)
								.includes(category)
						) {
							setFormData({
								...formData,
								type: "Expense",
								category,
							});
						}
						break;
					case "date":
						setFormData({ ...formData, date: s.value });
						break;
					default:
						break;
				}
			});

			if (
				segment.isFinal &&
				formData.amount &&
				formData.category &&
				formData.type &&
				formData.date
			) {
				createTransaction();
			}
		}
	}, [segment]);

	const selectedCategories =
		formData.type === "Income" ? incomeCategories : expenseCategories;

	return (
		<Grid container spacing={2}>
			<Snackbar open={open} setOpen={setOpen} />
			<Grid item xs={12}>
				{/* <Typography align="center" variant="subtitle2" gutterBottom>
					{segment ? (
						<div className="segment">
							{segment.words.map((w) => w.value).join(" ")}
						</div>
					) : null}
				</Typography> */}
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel>Type</InputLabel>
					<Select
						value={formData.type}
						onChange={(e) =>
							setFormData({
								...formData,
								type: e.target.value as string,
							})
						}
					>
						<MenuItem value="Income">Income</MenuItem>
						<MenuItem value="Expense">Expense</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel>Category</InputLabel>
					<Select
						value={formData.category}
						onChange={(e) =>
							setFormData({
								...formData,
								category: e.target.value as string,
							})
						}
					>
						{selectedCategories.map((c) => (
							<MenuItem key={c.type} value={c.type}>
								{c.type}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid>

			<Grid item xs={6}>
				<TextField
					type="number"
					label="Amount"
					value={formData.amount}
					onChange={(e) =>
						setFormData({ ...formData, amount: e.target.value })
					}
					fullWidth
				/>
			</Grid>
			<Grid item xs={6}>
				<TextField
					fullWidth
					label="Date"
					type="date"
					value={formData.date}
					onChange={(e) =>
						setFormData({
							...formData,
							date: formatDate(e.target.value),
						})
					}
				/>
			</Grid>
			<Button
				className={classes.button}
				variant="outlined"
				color="primary"
				fullWidth
				onClick={createTransaction}
			>
				Create
			</Button>
		</Grid>
	);
};

export default Form;
