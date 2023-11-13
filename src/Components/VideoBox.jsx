import React, { useEffect, useState } from 'react';
import {AiFillCloseCircle} from "react-icons/ai";
import {AiFillWarning} from "react-icons/ai"
function VideoBox({id,type,setShowVideo}) {
    const[videoPath,setVideoPath]=useState([]);
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzFmMTUxYmE1ZjIwNGY0ODdhYWEwNjcwMzkxODU3ZiIsInN1YiI6IjY0ZWU1MzE4ZTBjYTdmMDBlYzg1ZDBiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PbSmdKxCI4HlJM0OagJ-n6UKMlyEGcYwWRu_rqalEEc'
        }
      };

      useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => setVideoPath(response.results.slice(0,1)))
  .catch(err => console.error(err));
      },[type,id]);
      console.log(videoPath);

  return (
    <div className='w-[90%] h-[80%] bg-black max-sm:h-[50%] '>
        <div onClick={()=>setShowVideo(false)}
        className='flex justify-end p-3 text-additional-100'>
            <AiFillCloseCircle size={30} onClick={()=>setShowVideo(false)} className=' cursor-pointer'/>
        </div>
        {videoPath.length ===1 &&
        <div className='w-full h-full'>
        <h2 className='text-additional-100 p-10'>{videoPath[0].name}</h2>
        <iframe
        src={`https://www.youtube.com/embed/${videoPath[0].key}`}
        width="100%"
        height="100%">
        
        </iframe>
        </div>
        }
        {videoPath.length===0 &&
            <div className='w-full h-full flex flex-col items-center'>
                <h1 className='text-center text-red-700 text-5xl'>No video </h1>
                <AiFillWarning className='text-red-700 text-5xl'/>
            </div>
        }
        
    </div>
    
  )
}

export default VideoBox