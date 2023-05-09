import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ user }) => {

  return (
    


    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="placeholder"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user?.username}</h5>

        <div className="flex mt-4 space-x-3 md:mt-6">
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log Out</a>
        </div>

        <Link to="/wishlist" >
            <div className="transform transition duration-500 hover:scale-105 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-apercu" >

                <i className="bg-slate-300 text-white flex justify-center fa-regular fa-star text-7xl w-64 h-64"></i>
                    <div className="p-5">
                        <h2>Wishlist</h2>
                    </div>
            </div>
        </Link>
        <Link to="/mycollection" >
            <div className="transform transition duration-500 hover:scale-105 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-apercu" >

                <i className="bg-slate-300 text-white flex justify-center fa-regular fa-star text-7xl w-64 h-64"></i>
                    <div className="p-5">
                        <h2>My Collection</h2>
                    </div>
            </div>
        </Link>
    </div>


  )
}

export default Profile