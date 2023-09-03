/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
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

/* eslint-disable  */
import React, { useState, useEffect, useContext } from 'react';
import { Liquid } from '@ant-design/plots';
import { ExpenseTrackerContext } from '../../context/context';

const ProfilePage: React.FC = () => {
  const [percentage, setPercentage] = useState(0.55); // Initial percentage value
  const [profileinfo, setprofileinfo] = useState<any>([])
  const storageData : any  = JSON.parse(localStorage.getItem('user'));
  const { userLogindata } = useContext(ExpenseTrackerContext);
  const liquidConfig = {
    percent: percentage,
    outline: {
      border: 4,
      distance: 8,
    },
    wave: {
      length: 128,
    },
  };


 useEffect(() => {
   if(userLogindata?._id){
    setprofileinfo(userLogindata)
   }else {
    setprofileinfo(storageData)
   }
 
 }, [userLogindata,storageData, profileinfo])
 

 

  return (
    <div className="bg-light min-h-screen flex flex-col justify-center items-center p-4 sm:p-8">
      <div className="bg-transparent shadow-xl rounded-xl w-full sm:w-3/4 p-4 ">
        <h2 className="text-3xl font-semibold mb-4 text-center">Profile</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-5">Identity</h3>
            <ul className=" pl-4 space-y-4">
              <li className="mb-2 py-4 px-4 bg-white  rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <span className="font-semibold">Name:</span> {profileinfo?.username}
              </li>
              <li className="mb-2 py-4 px-4 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <span className="font-semibold">Email:</span> {profileinfo?.email}
              </li>
              <li className="mb-2 py-4 px-4 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <span className="font-semibold">Role:</span> {profileinfo?.role}
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative group ">
              <Liquid className='relative' {...liquidConfig} />
              <div className="absolute top-0 left-0 w-full h-2 opacity-20 group-hover:opacity-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
