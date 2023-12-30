import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white py-5 px-4 z-50 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300 transition duration-300">Genoshi.io</Link>
        </div>
        <ul className="flex">
          <li className="ml-8 hover:text-blue-400 transform hover:scale-110 transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="ml-8 hover:text-blue-400 transform hover:scale-110 transition duration-300">
            <Link to="/create-graph" >Create New Graph</Link>
          </li>
          <li className="ml-8 hover:text-blue-400 transform hover:scale-110 transition duration-300">
            <Link to="/graph-details" >Graph Details</Link>
          </li>
          <li className="ml-8 hover:text-blue-400 transform hover:scale-110 transition duration-300">
            <Link to="/account-settings" >Account Settings</Link>
          </li>
          <li className="ml-8 hover:text-blue-400 transform hover:scale-110 transition duration-300">
            <Link to="/pricing" >Pricing</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
