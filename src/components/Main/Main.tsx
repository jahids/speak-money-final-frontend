/* eslint-disable @typescript-eslint/no-unused-vars */
// import React, { useContext, useEffect, useState } from 'react';
// import List from './List/List';
// import Form from './Form/Form';
// import { ExpenseTrackerContext } from '../../context/context';

// const ExpenseTracker: React.FC = () => {
//   const [isMounted, setIsMounted] = useState(false);
//   const { balance } = useContext(ExpenseTrackerContext);
//   return (
//     <div
//       className={`bg-white p-6 rounded-md shadow-lg mx-auto max-w-md ${
//         isMounted ? 'animate-fade-in' : ''
//       }`}
//     >
//       <p className="text-center text-2xl font-semibold mb-4">Total Balance ${balance}</p>
//       <span className="block text-sm text-center text-gray-500">
//         Try saying: Add income of $100 in the category Salary for Monday
//       </span>

//       <span className="block text-sm text-center text-gray-500">
//       </span>
//       <Form />
//       <div className='mt-4'>
//       <List />  
//       </div>
         
//     </div>
//   );
// };

// export default ExpenseTracker;


import React, { useContext, useEffect, useState } from 'react';
import List from './List/List';
import Form from './Form/Form';
import { ExpenseTrackerContext } from '../../context/context';

const ExpenseTracker: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { balance } = useContext(ExpenseTrackerContext);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return (
    <div className={`expense-tracker-container bg-white p-6 rounded-md shadow-lg mx-auto max-w-md ${isMounted ? 'animate-fade-in' : ''}`}>
      <p className="text-center text-3xl font-semibold mb-4">Your Financial Overview</p>
      <p className="text-center text-lg text-gray-600">Total Balance: <span className="text-green-500">${balance}</span></p>
      <p className="text-sm text-center text-gray-500 mt-2">
        Manage your expenses and income with ease.
      </p>
      
      <Form />
      
      <div className="mt-4">
        <List />  
      </div>
    </div>
  );
};

export default ExpenseTracker;


// ************************

// import React, { useContext, useEffect, useState } from 'react';
// import List from './List/List';
// import Form from './Form/Form';
// import { ExpenseTrackerContext } from '../../context/context';
// import { useSpeechContext } from '@speechly/react-client';

// const ExpenseTracker: React.FC = () => {
//   const [isMounted, setIsMounted] = useState(false);
//   const { segment } = useSpeechContext();
//   const { balance, loading } = useContext(ExpenseTrackerContext);

//   useEffect(() => {
//     // Delay setting isMounted to true to trigger the fade-in animation
//     const timeout = setTimeout(() => {
//       setIsMounted(true);
//     }, 50);
//     return () => clearTimeout(timeout);
//   }, []);

//   useEffect(() => {
//     console.log("trnscript", segment);
//   }, [segment]);

//   return (
//     <div
//       className={`bg-white p-6 rounded-md shadow-lg mx-auto max-w-md ${
//         isMounted ? 'animate-fade-in' : ''
//       }`}
//     >
//       {loading ? (
//         <p className="text-4xl text-white">Loading....</p>
//       ) : (
//         <>
//           <p className="text-center text-2xl font-semibold mb-4">Total Balance ${balance}</p>
//           <span className="block text-sm text-center text-gray-500">
//             Try saying: Add income of $100 in the category Salary for Monday
//           </span>
//           <span className="block text-sm text-center text-gray-500">
//             {segment ? segment.words.map((w) => w.value).join(' ') : null}
//           </span>
//           <Form />
//           <hr className=" border-t border-gray-300" />
//           <List />
//           <h2>hello</h2>
//         </>
//       )}
//     </div>
//   );
// };

// export default ExpenseTracker;


// import React, { useState, useEffect, useContext } from 'react';
// import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
// import { useSpeechContext } from '@speechly/react-client';

// import useStyles from './styles';
// import Form from './Form/Form';
// import List from './List/List';
// import { ExpenseTrackerContext } from '../../context/context';


// const ExpenseTracker = () => {
//   const classes = useStyles();
//   const { balance  }  = useContext(ExpenseTrackerContext);

//   return (
//     <Card className={classes.root}>
//       <CardHeader title="Track Your Expenses" subheader="Let us take care of it" align="center"/>
//       <CardContent>
//         <Typography align="center" variant="h5">Total Balance ${balance}</Typography>
//         <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
//           {/* <InfoCard /> */}
//         </Typography>
//         <Divider className={classes.divider} />
//         <Form />
//       </CardContent>
//       <CardContent className={classes.cartContent}>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <List />
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// };

// export default ExpenseTracker;