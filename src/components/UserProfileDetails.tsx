const UserProfileDetails = ({ name, email, bio, profilePhoto }: any) => {
    return (
      <div className="bg-gray-800 text-white p-6 shadow-lg rounded-lg">
        <div className="flex flex-col h-full transform hover:scale-105 transition duration-300 ease-in-out">
          <img
            src={profilePhoto}
            alt="Profile"
            className="h-32 w-32 rounded-full mx-auto"
          />
          <h2 className="text-2xl font-bold mt-4 mb-2 text-center">{name}</h2>
          <p className="text-gray-300 text-center">{email}</p>
          <p className="text-gray-400 mt-4 text-center">{bio}</p>
        </div>
      </div>
    );
  };
  
  export default UserProfileDetails;