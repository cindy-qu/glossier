import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from "./Login";
import Username from './Username';
import ProfileImage from './ProfileImage';


const Profile = ({ user, setUser, setUpdateAfterImageUpdate, setUpdateAfterUsername}) => {

    const initFormData = {
        username: user?.username
    }

    const [formData, setFormData] = useState(initFormData)
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setFormData(formData => {
            return{
                ...formData,
                [name]:value
            }
        })
    }

    // function handleSubmit(e){
    //     e.preventDefault();
    //     setIsLoading(true);

    //     const entireFormData = new FormData(e.target);

    //     fetch(`/users/${user?.id}`, {
    //         method: "PATCH",
    //         headers: {
    //             accept: "application/json",
    //         },
    //         body: entireFormData,
    //     }).then((res) => {
    //         if (res.ok) {
    //             res.json().then((userData) => {
    //                 setIsLoading(false);

    //             })
    //         } else {
    //             setIsLoading(false)
    //             res.json().then((err) => setErrors(err.errors))
    //         }
    //     })
    // }

    const formErrorMsg = errors?.map((err) => (
        <li key={err}>{err}</li>
      ))

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

    const [visible, setVisible] = useState(true)
    const visibleBookmark = visible ? "invisible" : ""
    const idhover = user?.id;

    const handleToggle = (e) => {
        console.log('hi')
        setVisible(false)
      }
      
      const closeToggle = (e) => {
        setVisible(true)
      }

      const [usernameVisible, setUsernameVisible] = useState(true)
      const showUsername = usernameVisible ? "invisible" : ""

      const [profileVisible, setProfileVisible] = useState(true)
      const showProfileImage = profileVisible ? "invisible" : ""


      const handleUsernameVisible = (e) => {
        setUsernameVisible(!usernameVisible)
      }

      const closeUsernameToggle = (e) => {
        setUsernameVisible(!usernameVisible)
      }


      const handleProfileVisible = (e) => {
        setProfileVisible(!profileVisible)
      }


      const closeProfileToggle = (e) => {
        setProfileVisible(!profileVisible)

      }

      console.log(showUsername)

      function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);

        const entireFormData = new FormData(e.target);

        fetch(`/users/${user?.id}`, {
            method: "PATCH",
            headers: {
                accept: "application/json",
            },
            body: entireFormData,
        }).then((res) => {
            if (res.ok) {
                res.json().then((userData) => {
                    setIsLoading(false);
                    closeProfileToggle()
                }).then(setUpdateAfterImageUpdate).then(setUpdateAfterUsername)
            } else {
                setIsLoading(false)
                res.json().then((err) => setErrors(err.errors))
            }
        })
    }


    function handleUsernameSubmit(e){
        e.preventDefault();
        setIsLoading(true);

        const entireFormData = new FormData(e.target);

        fetch(`/users/${user?.id}`, {
            method: "PATCH",
            headers: {
                accept: "application/json",
            },
            body: entireFormData,
        }).then((res) => {
            if (res.ok) {
                res.json().then((userData) => {
                    setIsLoading(false);
                    closeProfileToggle()
                }).then(setUpdateAfterImageUpdate).then(setUpdateAfterUsername)
            } else {
                setIsLoading(false)
                res.json().then((err) => setErrors(err.errors))
            }
        })
    }



    if (!user) return <Login setUser={setUser}/>
    

  return (
    

    <div>
        <div className="flex flex-col items-center pb-10">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user?.avatar_format?.url ? user?.avatar_format?.url : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} alt="profile-pic" />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user?.username}</h5>
            <button><i onClick={handleToggle}  className="text-red-300 hover:text-red-400 fa-sharp fa-solid fa-gear"></i></button>

            <div className={visibleBookmark} id={idhover}>
                <div className="fixed z-10 overflow-y-auto top-20 w-full left-0">
                    <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-900 opacity-75" />
                        </div>
                        <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="text-right">
                                <button type="button" className=" text-red-400 rounded hover:text-red-300 mr-2" onClick={closeToggle} ><i className="fa-solid fa-xmark"></i></button>
                            </div>

                            <div className="text-center font-apercu text-red-300">
                            <h1 className="text-xl">My Profile</h1>
                            <div className="grid grid-cols-3 py-10 gap-8">

                            
                            
                                <button onClick={handleUsernameVisible} className="hover:text-red-400">
                                    <i className="fa-solid fa-user text-6xl"></i>
                                    <p className="text-sm">Change Username</p>
                                    
                                </button>
                                
                                <button onClick={handleProfileVisible} className="hover:text-red-400">
                                    <i className="text-6xl fa-solid fa-image"></i>
                                    <p className="text-sm">Change Profile Picture</p>
                                </button>
                                
                                <button  onClick={handleLogoutUser}  className="hover:text-red-400">
                                    <i className="text-6xl fa-solid fa-power-off"></i>
                                    <p className="text-sm">Sign Out</p>
                                </button>
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
{/* username */}
            {<Username user={user} isLoading={isLoading} handleOnChange={handleOnChange} showUsername={showUsername} closeUsernameToggle={closeUsernameToggle} handleUsernameSubmit={handleUsernameSubmit} formData={formData}/>}
            {<ProfileImage formErrorMsg={formErrorMsg} user={user} isLoading={isLoading} handleOnChange={handleOnChange} showProfileImage={showProfileImage} closeProfileToggle={closeProfileToggle} handleSubmit={handleSubmit} formData={formData}/>}
            



            <div className="flex mt-4 space-x-3 md:mt-6">
                {/* <button onClick={handleLogoutUser} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log Out</button> */}
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