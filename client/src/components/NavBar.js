import { NavLink } from 'react-router-dom'
import GFLogo from './Images/GF Logo.png'

const NavBar = () => {
  return (
    <div className="bg-glossier-pink font-apercu">
        <div className="flex justify-center p-4">
            <NavLink 
                to="/"
            >
                <img src = {GFLogo} className="object-contain h-10 w-10 rounded-full "></img>    
            </NavLink> 

            <NavLink 
                to="/"
            > 
                <h1 className="italic font-semibold text-white text-2xl px-2">Glossier Fanatics</h1>
                
            </NavLink>  
        </div>
        <div className="font-semibold text-sm py-1">
            <NavLink
                to="/"
                className="px-2 "
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                className="px-2"
            >
                About
            </NavLink>
        </div>

    </div>
  )
}

export default NavBar