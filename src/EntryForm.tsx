
/* eslint-disable */

// import React from "react";
// import { IntroPopup } from "@speechly/react-ui";

// import {
//   BigTranscript,
//   // IntroPopup,
//   PushToTalkButton,
//   PushToTalkButtonContainer,
// } from '@speechly/react-ui';
// import Detail from "./components/Detail/Detail";
// import Details from "./components/Detail/Detail";
// import { DetailsOutlined } from "@material-ui/icons";
// import ExpenseTracker from "./components/Main/Main";


// const EntryForm: React.FC = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
    
//       {/* Desktop View */}
//       <div className="w-full md:w-1/3 p-4 mb-5">
//         <Details title="Expense" subheader={""}/>
//        </div>
//       <div className="w-full md:w-1/3 p-4 mb-5">
//             <ExpenseTracker/>
//       </div>

//       {/* Mobile View */}
//       <div className="w-full md:w-1/3 p-4 mb-5">
//         <Details title="Income" subheader={""} />
//       </div>

//       {/* PushToTalkButton */}
//       <div className="push-to-talk-container">
//         <PushToTalkButtonContainer>
//         {/* <PushToTalkButton captureKey=" " /> */}
//         <BigTranscript placement="top" />
//       <PushToTalkButton placement="top" captureKey=" " powerOn="auto"  />
//       <IntroPopup />
//         </PushToTalkButtonContainer>
//       </div>
//       <div className="w-full md:w-1/4 p-4 mb-5">
//         {/* give me i catch design */}
//       </div>

//     </div>
//   );
// };

// export default EntryForm;


// import React from "react";
// import { IntroPopup } from "@speechly/react-ui";
// import {
//   BigTranscript,
//   PushToTalkButton,
//   PushToTalkButtonContainer,
// } from "@speechly/react-ui";
// import Details from "./components/Detail/Detail";
// import ExpenseTracker from "./components/Main/Main";

// const EntryForm: React.FC = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
//       {/* Intro Popup */}
//       <IntroPopup>
//         <span slot="priming-body">
//           Welcome! Use your voice to manage expenses and income.
//         </span>
//       </IntroPopup>

//       {/* Expense Details */}
//       <div className="w-full md:w-1/3 p-4 mb-5">
//         <Details title="Expense" subheader="Track your expenses" />
//       </div>

//       {/* Expense Tracker */}
//       <div className="w-full md:w-1/3 p-4 mb-5">
       
//         <ExpenseTracker />
//       </div>

//       {/* Income Details */}
//       <div className="w-full md:w-1/3 p-4 mb-5">
//         <Details title="Income" subheader="Monitor your income" />
//       </div>

//       {/* Voice Control */}
//       <div className="push-to-talk-container">
//         <PushToTalkButtonContainer>
//           <BigTranscript placement="top" />
//           <PushToTalkButton
//             placement="top"
//             captureKey=" "
//             powerOn="auto"
//           />
//         </PushToTalkButtonContainer>
//       </div>

//       {/* Additional Info */}
//       <div className="w-full md:w-1/4 p-4 mb-5">
//         <div className="bg-gray-200 rounded-lg p-4 text-center">
//           <h2 className="text-xl font-semibold mb-2">Quick Tips</h2>
//           <p className="text-gray-700">
//             Use voice commands like "Add expense" or "Show income history."
//             Keep your financial management efficient!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EntryForm;


import React from "react";
import { IntroPopup } from "@speechly/react-ui";
import {
  BigTranscript,
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";
import Details from "./components/Detail/Detail";
import ExpenseTracker from "./components/Main/Main";
import "./EntryForm.css"

const EntryForm: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
      {/* Intro Popup */}
      <IntroPopup>
        <span slot="priming-body">
          Welcome! Use your voice to manage expenses and income.
        </span>
      </IntroPopup>

      {/* Expense Details */}
      <div className="w-full md:w-1/3 p-4 mb-5">
        <Details title="Expense" subheader="Track your expenses" />
      </div>

      {/* Expense Tracker */}
      <div className="w-full md:w-1/3 p-4 mb-5">
        <ExpenseTracker />
      </div>

      {/* Income Details */}
      <div className="w-full md:w-1/3 p-4 mb-5">
        <Details title="Income" subheader="Monitor your income" />
      </div>

      {/* Voice Control */}
      <div className="push-to-talk-container">
        <PushToTalkButtonContainer >
          <BigTranscript placement="top" />
          <PushToTalkButton  captureKey=" " powerOn="auto" />
        </PushToTalkButtonContainer>
      </div>

      {/* Additional Info */}
      <div className="w-full md:w-1/4  sm:w:1/2 p-4 mb-5">
        <div className="bg-gray-200 rounded-lg p-4 text-center">
          <h2 className="text-xl font-semibold mb-2">Quick Tips</h2>
          <p className="text-gray-700">
            Use voice commands like "Add expense" or "Show income history."
            Keep your financial management efficient!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EntryForm;
