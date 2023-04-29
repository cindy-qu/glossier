import { NavLink } from 'react-router-dom'
import GFLogo from './Images/GF Logo.png'

const NavBar = () => {
  return (
    // <div className="bg-glossier-pink font-apercu">
    //     <div className="flex justify-center p-4">
    //         <NavLink 
    //             to="/"
    //         >
    //             <img src = {GFLogo} className="object-contain h-10 w-10 rounded-full "></img>    
    //         </NavLink> 

    //         <NavLink 
    //             to="/"
    //         > 
    //             <h1 className="italic font-semibold text-white text-2xl px-2">Glossier Fanatics</h1>
                
    //         </NavLink>  
    //     </div>
    //     <div className="font-semibold text-sm py-1">
    //         <NavLink
    //             to="/"
    //             className="px-2 "
    //         >
    //             Home
    //         </NavLink>
    //         <NavLink
    //             to="/about"
    //             className="px-2"
    //         >
    //             About
    //         </NavLink>
    //         <NavLink
    //             to="/about"
    //             className="px-2 inline flex justify-end"
    //         >
    //             About
    //         </NavLink>
    //     </div>

       
    // </div>
    
<nav class="bg-glossier-pink font-apercu fixed w-full z-20 top-0 left-0 ">
  <div class="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" className="flex   md:order-1 ">
      <img src={GFLogo} className=" object-contain h-10 w-10 rounded-full" alt="Glossier Fanatics Logo"/>
      <span class="self-center italic font-semibold text-white text-2xl px-2 whitespace-nowrap">Glossier Fanatics</span>
  </a>

  <div class="flex md:order-2 px-32">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i class="fa-solid fa-user"></i></button>

  </div>
  
  <div class="items-center justify-between hidden w-full md:flex md:w-auto " id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white  rounded md:hover:text-red-300">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white  rounded md:hover:text-red-300 ">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white  rounded md:hover:text-red-300  ">Contact</a>
      </li>
     
    </ul>
  </div>
  </div>
</nav>

  )
}

export default NavBar