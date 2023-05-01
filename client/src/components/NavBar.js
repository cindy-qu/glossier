import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import GFLogo from './Images/GF Logo.png'

const NavBar = ({handleSearch,handleKeyDown}) => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const navVisible = isNavOpen ? "w-full md:block md:w-auto " :  "hidden w-full md:block md:w-auto"
    const searchVisible = isSearchOpen ? " " :  "hidden"



//     const [searchItem, setSearchItem] = useState("")

//     const handleSearch = (e) => {
//         setSearchItem(e.target.value)
//     }
//     // console.log(searchItem)

//     async function fetchSearch ( searchItem )  {
//            let response = await fetch(`http://localhost:3000/search/${searchItem}`, {
//            method: "GET",
//            headers:{
//                'Accept': 'application/json',
//                'Content-Type': 'application/json',
//            },
  
//        })

//        let responseJson = await response.json()
//        return responseJson
      
//    }

//     const handleKeyDown = async (e) => {
       
//         if (e.key === 'Enter') {
//             e.preventDefault();
//             const searchArray = await fetchSearch(searchItem)
//             //  console.log(searchArray)
//             navigate(`/results/${searchItem}`)
//         }
//     }

  return (

    
<nav className="bg-glossier-pink font-apercu  w-full z-20 top-0 left-0 mb-2 ">
    
  <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto 2xl:p-4 xl:p-4 lg:p-4 md:p-1 py-1" >
  <button onClick={() => setIsNavOpen((prev) => !prev)} type="button" className="inline-flex items-start p-2 ml-3 text-sm text-red-300 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>

  <a href="/" className="flex   md:order-1 ">
      <img src={GFLogo} className=" object-contain h-10 w-10 rounded-full" alt="Glossier Fanatics Logo"/>
      <span className="self-center italic font-semibold text-white text-2xl px-2 whitespace-nowrap">Glossier Fanatics</span>
  </a>

    <div className="flex md:order-3">
    
        <button onClick={() => setIsSearchOpen((prev) => !prev)} type="button" className="inline-flex items-start p-2 ml-3 text-sm text-red-300 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
            <span className="sr-only">Open main menu</span>
            <i className="text-red-300 fa-solid fa-magnifying-glass"></i> 
        </button>

{/* Mobile Search Bar */}
        <div className={searchVisible}>
            <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col w-full z-20 bg-red-200 bg-opacity-75  overflow-y-auto ">
                <i onClick={() => setIsSearchOpen((prev) => !prev)} className="text-2xl text-white fa-regular fa-circle-xmark"></i>
                <div className="relative mx-5">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <i className="text-red-300 fa-solid fa-magnifying-glass"></i>   
                    </div>
                    <input onChange={handleSearch} onKeyDown={handleKeyDown} type="search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-4 focus:outline-none focus:ring-red-200" placeholder="Search Product" required />
                </div>
                
            </div>
        </div>

        <form className=" pr-20 items-center justify-between hidden w-full lg:flex md:w-auto">   
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="text-red-300 fa-solid fa-magnifying-glass"></i>   
                </div>
                <input onChange={handleSearch} onKeyDown={handleKeyDown} type="search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-4 focus:outline-none focus:ring-red-200" placeholder="Search Product" required />
            
            </div>
        </form>

        {/* User */}
        <NavLink to="/profile" className="align-left text-red-300 hover:text-red-400 font-medium rounded-md text-sm px-4 py-2 "><i className="fa-solid fa-user"></i></NavLink>   
    </div>

 
    <div className={navVisible}>

        <div className="items-center justify-between  w-full md:flex md:w-auto " id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">     
            <NavLink
                to="/"
                className="block py-2 pl-3 pr-4 text-white  rounded md:hover:text-red-300"
                >
                Home
            </NavLink>           
            <NavLink
                to="/about"
                className="block py-2 pl-3 pr-4 text-white  rounded md:hover:text-red-300"
                >
                About
            </NavLink>  
            <NavLink
                to="/contact"
                className="block py-2 pl-3 pr-4 text-white  rounded md:hover:text-red-300"
                >
                Contact
            </NavLink>  
            
            </ul>
        </div>
    </div>
  </div>
</nav>

  )
}

export default NavBar