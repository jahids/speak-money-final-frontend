/* eslint-disable  */

import React, { useState } from "react";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { SidebarData } from "../Data/Data";
import { Outlet, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Sidebar.css"; // Make sure to adjust the path according to your project structure

const Sidebar: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);
  const [expanded, setExpanded] = useState<boolean>(true);
  const navigate = useNavigate();

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  const handleMenuItemClick = (index: number, path: string) => {
    setSelected(index);
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    navigate("/login")

  }

  return (
    <>
      <div
        className="bars" // Update with appropriate class name from your CSS
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <FaBars />
      </div>
      <motion.div
        className="sidebar" // Update with appropriate class name from your CSS
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? (expanded ? "true" : "false") : ""}
      >
        <div className="logo">
          <span>
            Sp<span>eak</span>Money
          </span>
        </div>
        <div className="menu"> {/* Update with appropriate class name */}
          {SidebarData.map((item: any, index: number) => (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => handleMenuItemClick(index, item.path)}
            >
              {React.createElement(item.icon)}
              <span>{item.heading}</span>
            </div>
          ))}
          <div
            className="menuItem" // Update with appropriate class name
            onClick={() => handleLogout()} // Example for logout
          >
            <FaSignOutAlt />
          </div>
        </div>
      </motion.div>
      <Outlet/>
    </>
  );
};

export default Sidebar;
