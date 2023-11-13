import { useState,useRef,useEffect } from "react";
import React from 'react';
import {motion} from "framer-motion";
import Details from "../Scenes/Details";
import { Link } from 'react-router-dom';

const imgPath="https://image.tmdb.org/t/p/w500/";

function Carousel({items,type}) {
const [width, setWidth] = useState(3300);
const carouselRef = useRef();

// useEffect(() => { 
//   const a=(carouselRef.current.scrollWidth); //all the div
//   const b=(carouselRef.current.offsetWidth); //inner div
//   setWidth(a+b);
// }, []);

  return (
    <div>
    <motion.div ref={carouselRef} className=" overflow-hidden "
    >
    <motion.div className=' h-[360px] flex bg-first-200 cursor-grab' style={{ width:`${200*22}px`}}
    drag="x" dragConstraints={{right:0 ,left:-width}}
    >
        {items.map((item)=>(
            <motion.div key={item.id}style={{backgroundImage:`url("${imgPath}${item.poster_path}")`}}
            className='min-w-[200px] min-h-[300px] bg-center bg-contain bg-no-repeat m-2 cursor-grab 
              drop-shadow-lg flex items-end'>
                
              <Link to="/details" className="w-full">
                <button className="w-full border-2 border-t-0 border-additional-100
                bg-first-200 cursor-pointer text-xl text-additional-100 z-10
                hover:text-2xl ease-linear duration-100"
                onClick={()=>{
                  localStorage.setItem('id',`${item.id}`)
                  localStorage.setItem('type',type)
                }}>Details</button>

              </Link>
            </motion.div>
        ))}
    </motion.div>
    </motion.div>
    </div>
  )
}

export default Carousel