import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {RiMenuUnfoldFill} from "react-icons/ri";
import {FaRegWindowClose} from "react-icons/fa"

function Navbar() {
    const linkStyle=`text-first-100 font-semibold text-lg
    hover:bg-[linear-gradient(90deg,_#104b37_0%,_#b68942_100%)] hover:bg-clip-text 
    hover:text-transparent ml-3`;

    const[mobileView,setMobileView]=useState(false);
  return (

    <div className=' h-[50px] bg-transparent backdrop-blur-xl flex items-center justify-between fixed z-10 w-full
    border-b-2 border-additional-100 '>
        <div className=' ml-2 flex items-center'>
       
        <RiMenuUnfoldFill className='md:hidden text-additional-100' size={20}
        onClick={()=>setMobileView(true)}/>
        
        <Link to="./">
           <h1 className='text-xl text-additional-100'><span className='text-3xl text-first-100
            font-bold'>
            N</span>ourFlix
            </h1>
        </Link>

        {mobileView && (
            <div className=' m-0 relative w-screen top-10  left-[-110px] h-[30%] bg-first-200 transition-all
             ease-linear  duration-150 z-[1000]'>
            <ul className='flex flex-col justify-center items-center gap-4 mt-10'>
            <Link to="./movies" className={linkStyle}>Movies</Link>
            <Link to="/shows" className={linkStyle}>Tv Shows</Link>
            <FaRegWindowClose size={25} className='text-additional-100 '
            onClick={()=>setMobileView(false)}/>
        </ul>
            </div>
        )}
        
        </div>
        
        <ul className='hidden md:flex'>
            <Link to="./movies" className={linkStyle}>Movies</Link>
            <Link to="/shows" className={linkStyle}>Tv Shows</Link>
        </ul>


        <button className='bg-first-100 text-additional-100 border-2 p-1  font-extrabold
        border-additional-100  hover:bg-additional-100 hover:text-first-100 transition-colors
        durarion-1 mr-2 w-20'>My List</button>


    </div>
  )
}

export default Navbar