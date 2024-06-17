import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <ul className="box bg-[#D9D9D9] w-[135px] h-screen top-0 left-0 text-gray-900 font-jura flex flex-col items-center justify-center">
        <li className='flex flex-col'>
            <NavLink to="/Home" className={(isActive) => (`box h-[6%] w-[90%]  rounded-lg m-2 
            flex justify-center items-center font-jura text-[#fff] ${isActive ? " bg-[#3f3f3f] border-[3px] border-solid border-[#6c6b6b]" : "bg-[#8E8E8E] border-[0px]"}
            text-ellipsis text-[120%] min-h-9`)}>
                All
            </NavLink>
            <NavLink to="/important" className={(isActive)=> (`box h-[6%] w-[90%] bg-[#8E8E8E] rounded-lg m-2 
            flex justify-center items-center font-jura text-[#fff] ${isActive ? "bg-[#3f3f3f] border-[3px] border-solid border-[#6c6b6b] " : "bg-[#8E8E8E] border-[0px]"}
            text-ellipsis text-[120%] min-h-9`)}>
                Important
            </NavLink>
            {/* <NavLink to="captures" className={(isActive)=> (`box h-[6%] w-[90%] bg-[#8E8E8E] rounded-lg m-2 
            flex justify-center items-center font-jura text-[#fff] ${isActive ? "bg-[#3f3f3f] border-[3px] border-solid border-[#6c6b6b] " : "bg-[#8E8E8E] border-[0px]"}
            text-ellipsis text-[120%] min-h-9`)}>
                Captures
            </NavLink> */}
            
        </li>
        </ul>
      
    </div>
  )
}


