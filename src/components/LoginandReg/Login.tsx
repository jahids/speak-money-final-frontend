/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ExpenseTrackerContext } from "../../context/context";

const Login: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const navigate = useNavigate(); // Hook for navigation
	const { setuserLogindata } = useContext(ExpenseTrackerContext);
	
	// const handleSubmit = () => {
	// //   e.preventDefault();
	//   console.log("User email:", email);
	//   console.log("User password:", password);
	//   // You can perform further actions here, such as sending the data to a server
	// };

	const handleSubmit = async () => {
		try {
			const response = await axios.post(
				"http://localhost:7000/speak/login",
				{
					username: email,
					password: password,
				}
			);
			// Assuming successful login
			const { token, data } = response.data;
			console.log("resp",response.data )

			if(!token){
				navigate("/login")
			}else{
				setuserLogindata(data)
				localStorage.setItem("token", token);
				localStorage.setItem("user", JSON.stringify(data));
				navigate("/")
			}
			// navigate("/"); // Replace with your actual dashboard route
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div
			className="flex login-parent items-center justify-center min-h-screen"
			style={{
				background:
					"linear-gradient(246deg, #ffe1bc 29.63%, #ffcfd1 51.55%, #f3c6f1 90.85%)",
			}}
		>
			<div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
				<div className="p-6 md:p-20">
					<h2 className="font-mono mb-5 text-4xl font-bold">
						Log In
					</h2>
					<p className="max-w-sm mb-12 font-sans font-light text-gray-600">
						Log in to your account to upload or download pictures,
						videos or music.
					</p>
					{/* Input */}
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full mb-5 p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
						placeholder="Enter your email address"
					/>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
						placeholder="Enter your Passowrd"
					/>

					{/* Middle Content */}
					<div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
						<Link to="/signup" className="font-light text-cyan-700">
							Don't have an account? Sign Up
						</Link>
						<motion.button
							className="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-blue-500 shadow-blue-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
							whileHover={{ y: -2 }}
						>
							<span onClick={() => handleSubmit()}>Login</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-7"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="#ffffff"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path
									stroke="none"
									d="M0 0h24v24H0z"
									fill="none"
								/>
								<line x1="5" y1="12" x2="19" y2="12" />
								<line x1="13" y1="18" x2="19" y2="12" />
								<line x1="13" y1="6" x2="19" y2="12" />
							</svg>
						</motion.button>
					</div>

					{/* Border */}
					<div className="mt-12 border-b border-b-gray-300"></div>

					{/* Bottom Content */}
					<p className="py-6 text-sm font-thin text-center text-gray-400">
						or log in with
					</p>

					{/* Bottom Buttons Container */}
					<div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
						<button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="48"
								height="48"
								viewBox="0 0 48 48"
							>
								<linearGradient
									id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
									x1="9.993"
									x2="40.615"
									y1="9.993"
									y2="40.615"
									gradientUnits="userSpaceOnUse"
								>
									<stop
										offset="0"
										stop-color="#2aa4f4"
									></stop>
									<stop
										offset="1"
										stop-color="#007ad9"
									></stop>
								</linearGradient>
								<path
									fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
									d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
								></path>
								<path
									fill="#fff"
									d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
								></path>
							</svg>
							<span className="font-thin">Facebook</span>
						</button>
						<button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="48"
								height="48"
								viewBox="0 0 48 48"
							>
								<path
									fill="#fbc02d"
									d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
								></path>
								<path
									fill="#e53935"
									d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
								></path>
								<path
									fill="#4caf50"
									d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
								></path>
								<path
									fill="#1565c0"
									d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
								></path>
							</svg>
							<span className="font-thin">Google</span>
						</button>
					</div>
				</div>
				<img
					src="https://thetork.com/demos/html/bitrader/assets/images/banner/home1/1.png"
					alt=""
					className="w-[500px] hidden md:block md:rounded-r-2xl"
				/>
			</div>
		</div>
	);
};

export default Login;
