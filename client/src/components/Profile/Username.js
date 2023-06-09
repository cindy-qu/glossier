import React from 'react'

const Username = ({ user, isLoading, handleOnChange, showUsername, closeUsernameToggle, handleUsernameSubmit, formData }) => {
  return (
    <div className={showUsername}>
                <div className="fixed z-10 overflow-y-auto top-20 w-full left-0">
                    <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 " />
                        </div>
                        <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="text-right">
                                <button type="button" className=" text-red-400 rounded hover:text-red-300 mr-2" onClick={closeUsernameToggle} ><i className="fa-solid fa-xmark"></i></button>
                            </div>

                            <div className="text-center font-apercu text-red-300">
                                <i className="fa-solid fa-user text-6xl"></i>
                                <h2 className="text-xl py-3">Update Username</h2>
                                <div className="text-center">
                                    <form className="px-16 py-3 username-form" onSubmit={handleUsernameSubmit}>
                                        <div className="flex items-center border-b border-red-300 py-2">
                                            <input 
                                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                                                type="text"
                                                name="username"
                                                value={formData.username}
                                                onChange={handleOnChange}
                                                 />
                                                 
                                            <button 
                                                className="flex-shrink-0 bg-red-300 hover:bg-red-400 border-red-300 hover:border-red-400 text-sm border-4 text-white py-1 px-2 rounded" 
                                                type="submit">
                                                {isLoading ? "Loading..." : "Update"}
                                            </button>
                                        </div>
                                    </form>
                                   

                            
                              
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Username