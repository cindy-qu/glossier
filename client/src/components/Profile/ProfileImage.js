import React from 'react'

const ProfileImage = ({ formErrorMsg, user, isLoading, showProfileImage, closeProfileToggle, handleSubmit }) => {
    
  return (
    <div className={showProfileImage}>
      <div className="fixed z-10 overflow-y-auto top-20 w-full left-0">
          <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 " />
            </div>
            <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="text-right">
                <button type="button" className=" text-red-400 rounded hover:text-red-300 mr-2" onClick={closeProfileToggle} ><i className="fa-solid fa-xmark"></i></button>
              </div>
              <div className="text-center font-apercu text-red-300">
                <i className="fa-solid fa-image text-6xl"></i>
                <h2 className="text-xl py-3">Update Profile Image</h2>

                <form className='px-10 py-3 text-center font-apercu text-red-300' onSubmit={handleSubmit}>
                  <div className="flex items-center border-b border-red-300 py-2">
                    <input
                      id='file-upload'
                      type="file"
                      name="avatar"
                    />

                    <button className='flex-shrink-0 bg-red-300 hover:bg-red-400 border-red-300 hover:border-red-400 text-sm border-4 text-white py-1 px-2 rounded' type="submit">{isLoading ? "Loading..." : "Submit Changes"}</button>
                  </div>
                </form>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">PNG, JPG or JPEG (MAX. 3MB).</p>
              </div>
              <ul>{formErrorMsg}</ul>
            </div>
          </div>
      </div>    
    </div> 
//     <div className={showProfileImage}>
//     <div className="fixed z-10 overflow-y-auto top-20 w-full left-0">
//         <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//             <div className="fixed inset-0 transition-opacity">
//                 <div className="absolute inset-0 " />
//             </div>
//             <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//                 <div className="text-right">
//                     <button type="button" className=" text-red-400 rounded hover:text-red-300 mr-2" onClick={closeProfileToggle} ><i className="fa-solid fa-xmark"></i></button>
//                 </div>

//                 <div className="text-center font-apercu text-red-300">
//                     <i className="fa-solid fa-image text-6xl"></i>
//                     <h2 className="text-xl py-3">Update Profile Image</h2>
//                     <div className="text-center">
//                         <form className="px-16 py-3 username-form" onSubmit={handleSubmit}>
//                             <div className="flex items-center border-b border-red-300 py-2">

//                                 <input
//                                     id='file-upload'
//                                     type="file"
//                                     name="avatar"
//                                  />
                                     
//                                 <button 
//                                     className="flex-shrink-0 bg-red-300 hover:bg-red-400 border-red-300 hover:border-red-400 text-sm border-4 text-white py-1 px-2 rounded" 
//                                     type="button">
//                                     {isLoading ? "Loading..." : "Update"}
//                                 </button>
//                             </div>
//                             <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">PNG, JPG or JPEG (MAX. 3MB).</p>
                            
//                         </form>
                       

                
                  
//                 </div>
//                 </div>

//             </div>
//         </div>
//     </div>
// </div>


  )
}

export default ProfileImage