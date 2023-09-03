// InstallBanner.tsx
import React from 'react';

const InstallBanner: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-blue-500 p-2 text-white text-center">
      <p className="mb-2">Install our app for a better experience!</p>
      <button
        className="bg-white text-blue-500 px-4 py-2 rounded-lg"
        onClick={onClose}
      >
        Install
      </button>
    </div>
  );
};

export default InstallBanner;
