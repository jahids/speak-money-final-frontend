/* eslint-disable */
// import PropTypes from 'prop-types';
// // import  useStyles from './Style';

// import { motion } from 'framer-motion';
// import { Doughnut } from 'react-chartjs-2';

// import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
// import useTransactions from '../../useTransactions';
// Chart.register(ArcElement, Tooltip, Legend);

// // Default dataset for the Doughnut chart when chartData is empty
// const defaultDataset = {
//   labels: ['No Data'],
//   datasets: [
//     {
//       data: [1], // The value doesn't matter, it's just to create a segment
//       backgroundColor: ['rgba(200, 200, 200, 0.5)'], // Grayish color
//     },
//   ],
// };

//   // eslint-disable-next-line react/prop-types
//   export default function Detail({ title }) {


//     const cardClass =
//       title === 'Income'
//         ? 'border-b-4 border-green-300'
//         : 'border-b-4 border-red-300';
  
//     const cardVariants = {
//       hidden: { opacity: 0, y: 20 },
//       visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//     };

//     const {total, chartData} =useTransactions(title);
  
//     return (
//       <motion.div
//       initial="hidden"
//       animate="visible"
//       variants={cardVariants}
//       className={`bg-white rounded-md p-4 ${cardClass} shadow-md`}
//     >
//       <h3 className="text-lg font-semibold">{title}</h3>
//       <div className="mt-2">
//         <p className="text-xl">${total}</p>
//       </div>
//       <div className="mt-4">
//         {/* Replace this with your actual chart component */}
//         <div className="bg-gray-50 p-4 rounded-md shadow-md text-center">
//         {/* <Doughnut data={chartData.length > 0 ?  chartData : defaultDataset} /> */}
//         <Doughnut data={chartData} />
//         </div>
//       </div>
//     </motion.div>
//     );
//   }

// typescript

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Doughnut } from 'react-chartjs-2';
// import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
// import useTransactions from '../../useTransactions';
// Chart.register(ArcElement, Tooltip, Legend);

// interface DetailProps {
//   title: string;
// }

// const Detail: React.FC<DetailProps> = ({ title }) => {
//   const cardClass =
//     title === 'Income'
//       ? 'border-b-4 border-green-300'
//       : 'border-b-4 border-red-300';

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const { total , chartData } = useTransactions(title);

//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       variants={cardVariants}
//       className={`bg-white rounded-md p-4 ${cardClass} shadow-md`}
//     >
//       <h3 className="text-lg font-semibold">{title}</h3>
//       <div className="mt-2">
//         <p className="text-xl">${total}</p>
//       </div>
//       <div className="mt-4">
//         {/* Replace this with your actual chart component */}
//         <div className="bg-gray-50 p-4 rounded-md shadow-md text-center">
//           <Doughnut data={chartData} />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Detail;


// new one 

// import React from 'react';
// import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';

// import useStyles from './Style';


//  import { Doughnut } from 'react-chartjs-2';
// import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
// // import useTransactions from '../../useTransactions';
// Chart.register(ArcElement, Tooltip, Legend);
// import useTransactions from '../../useTransactions';

// interface DetailsProps {
//   title: string;
//   subheader: string;
// }

// const Details: React.FC<DetailsProps> = ({ title, subheader }) => {
//   const { total, chartData } = useTransactions(title);
//   const classes = useStyles();

//   return (
//     <Card className={title === 'Income' ? classes.income : classes.expense}>
//       <CardHeader title={title} subheader={subheader} />
//       <CardContent>
//         <Typography variant="h5">USD {total}</Typography>
//         <Doughnut data={chartData} />
//       </CardContent>
//     </Card>
//   );
// };

// export default Details;


import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import useTransactions from '../../useTransactions';
import useStyles from './Style'; // Make sure to import your style file

Chart.register(ArcElement, Tooltip, Legend);

interface DetailsProps {
  title: string;
  subheader: string;
}

const Details: React.FC<DetailsProps> = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();

  return (
    <Card className={`${classes.card} ${title === 'Income' ? classes.income : classes.expense}`}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">USD {total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
