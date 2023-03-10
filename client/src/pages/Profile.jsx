import React from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="h-screen ">
      <div className="flex items-center justify-center gap-2  bg-gray-gradient p-5">
        <button
          to="/myprofile"
          type="button"
          className="text-white bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          My Profile
        </button>
        <Link
          to="/mycomplaints"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          My Complaints
        </Link>
        <Link
          to="/registercomplaint"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Raise a complaint
        </Link>
      </div>
    </div>
  );
};

export default Profile;
