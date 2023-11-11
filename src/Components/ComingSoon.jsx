import React, { useState } from 'react';
import {GoCircle} from "react-icons/go"

function ComingSoon({slide}) {
    const imgPath="https://image.tmdb.org/t/p/w500/";
    const[slideIndex,setSlideIndex]=useState(0);
  return (
    <div className='w-full h-full'>
        {slide.length>1 && (
        <div style={{backgroundImage:`url("${imgPath}${slide[slideIndex].backdrop_path}")`}}
        className='h-full w-full bg-no-repeat bg-cover flex flex-col justify-center bg-center'>

            <div className='flex justify-between relative max-sm:flex-col-reverse'>
                <div className='backdrop-blur-sm w-3/6 ml-2 max-sm:w-[90%]'>
                <h1 className='text-3xl font-bold text-additional-100'>{slide[slideIndex].title} 
                <span className='ml-3 border-4 border-additional-100 rounded-full p-1 bg-black text-red-600
                text-xl'>{(slide[slideIndex].vote_average).toString().slice(0,3)}</span></h1>
                <p className='text-md text-red-950 font-semibold mt-1'>{slide[slideIndex].overview}</p>
                </div>

                <div className='w-2/6 max-sm:w-[90%]'>
                    <h1 className='text-4xl mr-3 font-extrabold text-first-100 '
                    style={{textShadow:"4px 4px 4px #b68942"}}
                    >On: {slide[slideIndex].release_date}</h1>
                </div>

            </div>

            <div id='dots' className='w-screen absolute flex top-[450px] justify-center items-center
            max-sm:top-[600px]'>
                {slide.map((s,sIndex)=>(
                    <div key={sIndex} onClick={()=>setSlideIndex(sIndex)} className=' bg-first-100 rounded-lg p-2'>
                        <GoCircle className='text-additional-100 rounded-full hover:bg-additional-100' />
                    </div>
                ))}
            </div>
            
        </div>
        )}
    </div>


  )
}

export default ComingSoon