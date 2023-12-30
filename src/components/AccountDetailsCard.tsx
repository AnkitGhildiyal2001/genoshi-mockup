import React from 'react';

interface AccountDetailsProps {
  plan: string;
  status: string;
}

const AccountDetailsCard: React.FC<AccountDetailsProps> = ({ plan, status }) => {
  return (
    <div className="bg-gray-800 text-white pl-10 p-6 shadow-lg rounded-lg transition duration-300 ease-in-out hover:shadow-2xl">
      <div className="flex flex-col h-full transform hover:scale-105 transition duration-300 ease-in-out">
        <h3 className="text-xl font-semibold mb-2">Account Details</h3>
        <p className="text-gray-300">Plan: <span className="font-semibold">{plan}</span></p>
        <p className="text-gray-300">Status: <span className={`font-semibold ${status === 'Active' ? 'text-green-400' : 'text-red-400'}`}>{status}</span></p>
      </div></div>
  );
};

export default AccountDetailsCard;
