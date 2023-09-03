// import React from "react";
// import CustomerReview from "../CustomerReview/CustomerReview";
// import Updates from "../Updates/Updates";
// import "./RightSide.css";

// const RightSide = () => {
//   return (
//     <div className="RightSide">
//       <div>
//         <h3>Updates</h3>
//         <Updates />
//       </div>
//       <div>
//         <h3>Customer Review</h3>
//         <CustomerReview />
//       </div>
//     </div>
//   );
// };

// export default RightSide



/* eslint-disable @typescript-eslint/no-unused-vars */
// import React, { useState, useEffect } from 'react';
// import { Liquid } from '@ant-design/plots';

// const ProfilePage: React.FC = () => {
//   const [percentage, setPercentage] = useState(0.55); // Initial percentage value

// //   useEffect(() => {
// //     // Simulate a change in the percentage value (you can update this logic as needed)
// //     const interval = setInterval(() => {
// //       const newPercentage = Math.random() * 50; // Generate a random percentage value
// //       setPercentage(newPercentage);
// //     }, 5000); // Change the percentage every 5 seconds (adjust as needed)

// //     return () => clearInterval(interval); // Cleanup the interval on unmount
// //   }, []);

//   const liquidConfig = {
//     percent: percentage,
//     outline: {
//       border: 4,
//       distance: 8,
//     },
//     wave: {
//       length: 128,
//     },
//   };

//   return (
//     <div className="bg-light min-h-screen flex flex-col justify-center items-center p-4 sm:p-8">
//       <div className="bg-trnsparent shadow-lg rounded-xl w-full sm:w-3/4 p-4">
//         <h2 className="text-3xl font-semibold mb-4 text-center">Profile</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div>
//             <h3 className="text-xl font-semibold mb-2">Identity</h3>
//             <ul>
//               <li className="mb-2 pl-4 pr-2 py-5">
//                 <span className="font-semibold">Name:</span> ImDezCode
//               </li>
//               <li className="mb-2 pl-4 pr-2 py-5">
//                 <span className="font-semibold">Email:</span> imdezcode@gmail.com
//               </li>
//               <li className="mb-2 pl-4 pr-2 py-5">
//                 <span className="font-semibold">Role:</span> Basic User
//               </li>
            
//             </ul>
//           </div>
//           <div className="flex justify-center items-center">
//             <Liquid {...liquidConfig} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ExpenseTrackerContext } from '../../context/context';
import { useSpeechSynthesis } from 'react-speech-kit';
import { AiOutlinePlayCircle, AiOutlineStop } from 'react-icons/ai';

const RightSide: React.FC = () => {
  const [category, setCategory] = useState<string>('');
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { balance } = useContext(ExpenseTrackerContext);
  const { speak, cancel } = useSpeechSynthesis();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lastApiCallTime = localStorage.getItem('lastApiCallTime');
        if (!lastApiCallTime || Date.now() - parseInt(lastApiCallTime) >= 24 * 60 * 60 * 1000) {
          setLoading(true); // Set loading to true while waiting for the response
          const response = await axios.get(`http://localhost:7000/tr/askAICoder?balance=${balance}`);
          const responseData = response?.data;
          console.log("api generated msg", responseData);
          localStorage.setItem('responseMessage', responseData.RESULT);
          setResponseMessage(responseData.RESULT);
          setLoading(false); // Set loading to false after getting the response
          // Cache the balance and last API call time to localStorage
          localStorage.setItem('balance', balance.toString());
          localStorage.setItem('lastApiCallTime', Date.now().toString());
        } else {
          // Use cached data from localStorage
          const cachedResponseMessage = localStorage.getItem('responseMessage');
          setResponseMessage(cachedResponseMessage);
        }
      } catch (error) {
        console.error(error);
        setLoading(false); // Set loading to false on error
      }
    };

    fetchData(); // Call the fetchData function when the component mounts or when balance changes
  }, [balance]);

  return (
    <div className="bg-light min-h-screen flex flex-col justify-center items-center p-4 sm:p-8">
      <div className="bg-transparent shadow-xl rounded-xl w-full sm:w-3/4 p-4 ">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Genarated Business Idea
          <span className="cursor-pointer" onClick={() => speak({ text: `${responseMessage}` })}>
            <AiOutlinePlayCircle className="text-blue-500 text-xl ml-2" />
          </span>
          <span className="cursor-pointer" onClick={() => cancel()}>
            <AiOutlineStop className="text-red-500 text-xl ml-2" />
          </span>
        </h2>
        <div className="max-h-60 overflow-y-auto">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <p className="min-h-20">{responseMessage}</p>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            {/* Input fields for balance and category */}
          </div>
          <div className="flex justify-center items-center">
            {/* Button to trigger API call */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
