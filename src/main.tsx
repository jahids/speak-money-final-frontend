/* eslint-disable @typescript-eslint/no-unused-vars */
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import { Provider } from "./context/context";
// import { SpeechProvider } from "@speechly/react-client";

// // Use createRoot instead of ReactDOM.render
// const root = document.getElementById("root");

// if (root) {
// 	// Create a root for the app
// 	const reactRoot = ReactDOM.createRoot(root);

// 	// Wrap the App component with the Provider
// 	const appWithProvider = (
// 		<React.StrictMode >
// 			<SpeechProvider
//         appId="a0e7364b-ab0b-401a-904c-735fa6e35415"
//       // appId="7c4aee08-1073-4a32-b862-ebe1850e0732"
//        language="en-US">
// 				<Provider>
// 					<App />
// 				</Provider>
// 			</SpeechProvider>
// 		</React.StrictMode>
// 	);

// 	// Render the app with the Provider using the created root
// 	reactRoot.render(appWithProvider);
// } else {
// 	console.error("Root element not found.");
// }


// typescript

import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import { Provider } from "./context/context";
//  import { SpeechProvider } from "@speechly/react-client";
import App from "./App";
// import { BrowserRouter } from "react-router-dom";

// Use createRoot instead of ReactDOM.render
const root = document.getElementById("root");

if (root) {
  // Create a root for the app
  const reactRoot = ReactDOM.createRoot(root);

  // Wrap the App component with the Provider
  const appWithProvider = (
    
        // {/* <SpeechProvider appId="a0e7364b-ab0b-401a-904c-735fa6e35415"> */}
     
        <Provider>
         <App/>
        </Provider>
       
        // {/* </SpeechProvider> */}
        
  );

  // Render the app with the Provider using the created root
  reactRoot.render(appWithProvider);
} else {
  console.error("Root element not found.");
}

