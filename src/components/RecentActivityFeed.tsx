import React from "react";

const RecentActivityFeed = ({ activities }: any) => {
  return (
    <div className="bg-gray-800 text-white p-6 shadow-lg rounded-lg">
      <div className="flex flex-col h-full transform hover:scale-105 transition duration-300 ease-in-out">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <ul>
          {activities.map((activity: any, index: any) => (
            <li key={index} className="mb-2">
              {activity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentActivityFeed;
