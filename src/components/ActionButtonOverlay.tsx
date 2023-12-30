import React, { useState, useRef, useEffect } from "react";

const ActionButtonOverlay = ({ children }: any) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
      setIsOverlayVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6">
      <div className="relative" ref={overlayRef}>
        <button
          className="bg-blue-500 text-white p-3 rounded-full transition-transform transform hover:rotate-90"
          onClick={toggleOverlay}
        >
          <span className="sr-only">Toggle Actions</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${isOverlayVisible ? "rotate-45" : ""} transition-transform transform-gpu origin-center`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
        {isOverlayVisible && (
          <div className="absolute bottom-0 right-0 space-y-2 p-2 bg-white text-gray-700 shadow-md rounded-lg">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActionButtonOverlay;
