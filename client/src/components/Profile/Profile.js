import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from "./Login";


const Profile = ({ user, setUser }) => {

    const navigate = useNavigate();

    function handleLogoutUser(){
        fetch("/logout", {
            method: "DELETE",
        }).then((res) => {
            setUser(null)
            navigate("/")
        })
    }

    console.log(user)

    if (!user) return <Login setUser={setUser}/>
    

  return (
    

    <div>
        <div className="flex flex-col items-center pb-10">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="placeholder"/>
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user?.username}</h5>
            {/* <h6 className="mb-1 text-l font-medium text-gray-900 dark:text-white">Member since {user?.created_at}</h6> */}

            <div className="flex mt-4 space-x-3 md:mt-6">
                <button onClick={handleLogoutUser} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log Out</button>
            </div>
        </div>
        <div>

        <div className="mx-20 my-8">
            <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                <Link to="/wishlist">
                    <div className="transform transition duration-500 hover:scale-105 bg-white border border-gray-200 rounded-lg shadow  font-apercu">
                        <i className="rounded-t-lg place-items-center bg-slate-300 text-white flex justify-center fa-regular fa-star text-9xl  h-64"></i>
                        <div className="p-5">
                            <h2>Wishlist</h2>
                        </div>
                    </div>
                </Link>
                <Link to="/mycollection">
                    <div className="transform transition duration-500 hover:scale-105 bg-white border border-gray-200 rounded-lg shadow  font-apercu">
                        <i className="rounded-t-lg place-items-center bg-slate-300 text-white flex justify-center fa-regular fa-heart text-9xl  h-64"></i>
                        <div className="p-5">
                            <h2>My Collection</h2>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </div>

    </div>


  )
}

export default Profile