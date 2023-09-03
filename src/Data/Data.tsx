/* eslint-disable @typescript-eslint/no-explicit-any */
// Sidebar imports
// import {
// 	UilEstate,
// 	UilClipboardAlt,
// 	UilUsersAlt,
// 	UilPackage,
// 	UilChart,
// 	UilSignOutAlt,
// } from "@iconscout/react-unicons";

// Analytics Cards imports
// import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
// import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../../public/android-chrome-192x192.png";
// import img2 from "../imgs/img2.png";
// import img3 from "../imgs/img3.png";


import {
	RiHome3Line,
	RiFileCopy2Line,
	RiUserLine,
	RiPagesLine,
} from "react-icons/ri";
import RightSide from "../components/RigtSide/RightSide";
// Sidebar Data
export const SidebarData : any = [
	{
		icon: RiPagesLine,
		heading: "Dashboard",
		path: "/",
	},
	{
		icon: RiHome3Line,
		heading: "Entry Form",
		path: "/entryform",
	},
	{
		icon: RiUserLine,
		heading: "Budget Craft",
		path: "/right",
	},
	{
		icon: RiFileCopy2Line,
		heading: "Porfile",
		path: "/profile",
	},
	{
		icon: RiPagesLine,
		heading: "Analytics",
		path: "/advchart",
	},
];

// Analytics Cards Data
export const cardsData : any  = [
	{
		title: "Income",
		color: {
			backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
			boxShadow: "0px 10px 20px 0px #e0c6f5",
		},
		barValue: 64,
		value: "25,970",
		png: RiHome3Line,  //using icon
		series: [
			{
				name: "Income",
				data: [31, 40, 28, 51, 42, 109, 100],
			},
		],
	},
	{
		title: "Savings",
		color: {
			backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
			boxShadow: "0px 10px 20px 0px #FDC0C7",
		},
		barValue: 80,
		value: "14,270",
		png: RiHome3Line,
		series: [
			{
				name: "Revenue",
				data: [10, 100, 50, 70, 80, 30, 40],
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
		barValue: 60,
		value: "4,270",
		png: RiHome3Line,
		series: [
			{
				name: "Expenses",
				data: [10, 25, 15, 30, 12, 15, 20],
			},
		],
	},
];


// Recent Update Card Data
export const UpdatesData = [
	{
		img: img1,
		name: "Andrew Thomas",
		noti: "has ordered Apple smart watch 2500mh battery.",
		time: "25 seconds ago",
	},
	{
		img: img1,
		name: "James Bond",
		noti: "has received Samsung gadget for charging battery.",
		time: "30 minutes ago",
	},
	{
		img: img1,
		name: "Iron Man",
		noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
		time: "2 hours ago",
	},
];
