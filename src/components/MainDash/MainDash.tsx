/* eslint-disable @typescript-eslint/no-unused-vars */
//import Table from "../Table/Table"
import "./MainDash.css";
import Cards from "../Cards/Cards";
import AdvancedTable from "../Table/Table";
import React, { useState, useEffect } from "react";
import axios from "axios";

const MainDash = () => {
 

  interface Transaction {
    id: string;
    amount: number;
    category: string;
    type: string;
    date: string;
  }
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const storageData : any  = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
      axios.get<Transaction[]>(`http://localhost:7000/transactions/${storageData?._id}`)
        .then((response) => {
          setTransactions(response.data);
          console.log("response data", response);
          
        })
        .catch((error) => {
          console.error("Error fetching transactions:", error);
        });
    }, [storageData?._id]);
  
  
  return (
    <div className="MainDash">
       <div className="dashboard-title">
        <h1 className="text-4xl font-semibold">Welcome to Your Dashboard</h1>
        <p className="text-lg text-gray-600">Keep track of your financial activities</p>
      </div>
      <Cards />
      <div style={{margin : "1rem"}}>
      <AdvancedTable tabledata = {transactions}/>
      </div>
     
    </div>
  );
};

export default MainDash;
