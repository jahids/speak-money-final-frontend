/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProFeaturesPopup: React.FC = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  const popupVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const popupStyles = {
    background: 'linear-gradient(246deg, #ffe1bc 29.63%, #ffcfd1 51.55%, #f3c6f1 90.85%)',
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50"
      initial="hidden"
      animate="visible"
      variants={popupVariants}
      style={popupStyles} // Apply the gradient background
    >
      <div  className="bg-transparent p-6 rounded-lg mx-5 shadow-2xl">
        <h2 className="text-2xl font-semibold mb-2">Pro Features</h2>
        <p className="text-gray-600">
          This is a pro feature popup. It appears when a user is authenticated but doesn't have the required role to access this content.
        </p>
        <p className="text-gray-600 mt-2">
          Upgrade to a pro account to access additional features.
        </p>
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 transition-colors"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </motion.div>
  );
};

export default ProFeaturesPopup;

