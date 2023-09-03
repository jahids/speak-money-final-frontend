/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { RiHome3Line } from "react-icons/ri"; // Import your desired icon
import axios from "axios"

const formatCardsData = (
  incomeTransactions: any[],
  expenseTransactions: any[],
  totalIncome:number,
  totalExpense:number,
  totalSavings:number,
  incomeBarValue : number,
savingsBarValue: number,
expensesBarValue: number,
) => {
  const cardsData = [
    {
      title: "Income",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: Math.round(incomeBarValue),
      value: totalIncome,
      png: RiHome3Line,
      series: [
        {
          name: "Income",
          data: incomeTransactions?.map((transaction) => transaction.amount),
        },
      ],
    },
    {
      title: "Savings",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: Math.round(savingsBarValue) ,
      value: totalSavings,
      png: RiHome3Line,
      series: [
        {
          name: "savings",
          data: 34,
        },
      ],
    },
    {
      title: "Expenses",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: Math.round(expensesBarValue),
      value: totalExpense,
      png: RiHome3Line,
      series: [
        {
          name: "Expenses",
          data: expenseTransactions?.map((transaction) => transaction.amount),
        },
      ],
    },
  ];

  return cardsData;
};

export const apicardData: any = async (id : any) => {

  
  try {
    const response = await axios.get(`http://localhost:7000/carddata/${id}`);
    const { lastIncome, lastExpense, totalIncome, totalExpense,totalSavings, incomeBarValue,savingsBarValue,expensesBarValue } = response.data;
    
    // console.log("format data",formatCardsData(lastIncome, lastExpense, totalIncome, totalExpense,totalSavings ));
    return formatCardsData(lastIncome, lastExpense, totalIncome, totalExpense,totalSavings, incomeBarValue,savingsBarValue,expensesBarValue);
  } catch (error) {
    console.error("Error fetching cards data:", error);
    return [];
  }
};
