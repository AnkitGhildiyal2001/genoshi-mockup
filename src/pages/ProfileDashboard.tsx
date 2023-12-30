import React from "react";
import NavBar from "../components/NavBar";
import UserProfileDetails from "../components/UserProfileDetails";
import AccountDetailsCard from "../components/AccountDetailsCard";
import UsageMetrics from "../components/UsageMetrics";
import RecentActivityFeed from "../components/RecentActivityFeed";
import GraphList from "../components/GraphList";
import ActionButtonOverlay from "../components/ActionButtonOverlay";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation

const ProfileDashboard: React.FC = () => {
  // Example data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Data enthusiast and researcher.",
    profilePhoto:
      "https://img.freepik.com/premium-vector/cute-boy-stand-cartoon_435121-82.jpg",
  };
  const usage = { graphsCreated: 10, graphsShared: 5, papersCollected: 7 };
  const activities = ["Created Graph A", "Shared Graph B", "Collected Paper C"];
  const savedGraphs = [
    {
      title: "Graph A",
      dateCreated: "2023-01-01",
      thumbnail:
        "https://www.shutterstock.com/shutterstock/videos/1106089431/thumb/8.jpg?ip=x480",
    },
    {
      title: "Graph B",
      dateCreated: "2019-02-21",
      thumbnail:
        "https://www.shutterstock.com/shutterstock/videos/1106089431/thumb/8.jpg?ip=x480",
    },
    {
      title: "Graph C",
      dateCreated: "2021-11-16",
      thumbnail:
        "https://www.shutterstock.com/shutterstock/videos/1106089431/thumb/8.jpg?ip=x480",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <NavBar />
      <div className="container mx-auto p-4 pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <UserProfileDetails {...user} />
        <AccountDetailsCard plan="Pro Plan" status="Active" />
        <UsageMetrics {...usage} />
        <RecentActivityFeed activities={activities} />
        <div className="col-span-1 md:col-span-2">
          <GraphList graphs={savedGraphs} />
          <div className="mt-4">
            <Link to="/favorites" className="text-blue-500 hover:underline">
              View Favorites
            </Link>{" "}
            |{" "}
            <Link to="/collections" className="text-blue-500 hover:underline">
              View Collections
            </Link>
          </div>
        </div>
      </div>
      <ActionButtonOverlay>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Create New Graph
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Share Graph
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Upload Paper
        </button>
      </ActionButtonOverlay>
    </div>
  );
};

export default ProfileDashboard;
