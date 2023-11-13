import React, { useState,useEffect } from 'react';
import {AiFillPlayCircle} from "react-icons/ai";
import CastList from '../Components/CastList';
import VideoBox from '../Components/VideoBox';


const API_IMG="https://image.tmdb.org/t/p/w500/";

function Details() {
    const[showVideo,setShowVideo]=useState(false);
    const id=localStorage.getItem('id');
    const type=localStorage.getItem('type');
    const[item,setItem]=useState([]);
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzFmMTUxYmE1ZjIwNGY0ODdhYWEwNjcwMzkxODU3ZiIsInN1YiI6IjY0ZWU1MzE4ZTBjYTdmMDBlYzg1ZDBiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PbSmdKxCI4HlJM0OagJ-n6UKMlyEGcYwWRu_rqalEEc'
        }
      };

        useEffect(()=>{
            fetch(`https://api.themoviedb.org/3/${type}/${id}?language=en-US`, options)
            .then(response => response.json())
            .then(response => {
                setItem(response);
            })
        },[id,type]);


      
   
  return (
    <div className='pt-[100px] max-w-screen min-h-screen bg-first-200 relative' >
        

        {type==='movie' &&
        <h1 className='text-additional-100 text-2xl text-center uppercase'>{item.title}
        <span className='text-xl text-light-100 border-l-2 border-light-100  m-3 p-2'>
            {item.runtime}mins</span></h1>
        }

        {type==='tv' && 
            <h1 className='text-additional-100 text-2xl text-center uppercase'>{item.name}
            <span className='text-xl text-light-100 border-l-2 border-light-100  m-3 p-2'>
                {item.number_of_episodes} Episodes</span></h1>
        }
        
        
        
        <div className=' w-screen flex justify-around mt-3 max-sm:flex-col max-sm:items-center'>

          <div className='w-2/6 max-sm:w-[80%]'>
          <img src={`${API_IMG}${item.backdrop_path}`}
          className='rounded-xl drop-shadow-2xl' alt='' />
          <div className=' grid grid-cols-2  justify-items-center'>
          {item.genres && item.genres.slice(0,5).map((genre,i)=>(
                <h4 key={i} className='p-1 border-2 m-1 mt-5 rounded-lg border-first-100 w-[100px] text-center
                text-additional-100 font-bold tracking-wider '>{genre.name}</h4>
              ))}
          </div>
          <div className= 'flex justify-center text-4xl text-additional-100'>
        <AiFillPlayCircle onClick={()=>setShowVideo(true)} className=' cursor-pointer
        hover:text-red-700'/>
        </div>
          </div>
          
          <div className='w-3/6 mr-2 text-light-100 max-sm:w-[90%]'>
              <h2 className='text-center font-semibold text-additional-100 '>{item.tagline}</h2>
              <p className='w-[90%]'>{item.overview}</p>
              <hr/>
              <p>Status: {item.status}</p>
              <hr/>
              <a href={item.homepage} target='_blank'>
              <p className='underline text-xs  '>{item.homepage}</p>
              </a>
              <hr/>
              <br/>
              <p>Cast List</p>
              <br/>
              <CastList id={id} type={type}/>
              <hr/>
          </div>
        </div>
        
        {showVideo===true && 
        <div className='absolute w-[90%] h-[80%] top-16 left-28 max-sm:left-5 max-sm:h-[60%] '>
          <VideoBox type={type} id={id} setShowVideo={setShowVideo}/>
        </div>
        }
       
    </div>
  )
}

export default Details