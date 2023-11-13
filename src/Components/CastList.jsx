import React, { useEffect, useState } from 'react'

function CastList({id,type}) {
    const imgPath="https://image.tmdb.org/t/p/w500/";
    const[cast,setCast]=useState([]);
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzFmMTUxYmE1ZjIwNGY0ODdhYWEwNjcwMzkxODU3ZiIsInN1YiI6IjY0ZWU1MzE4ZTBjYTdmMDBlYzg1ZDBiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PbSmdKxCI4HlJM0OagJ-n6UKMlyEGcYwWRu_rqalEEc'
        }
      };
      useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?language=en-US`,options)
            .then(response => response.json())
            .then(response => setCast(response.cast.slice(0,5)))
            .catch(err => console.error(err));
      },[id,type]);
  return (
    <div className='w-full grid grid-cols-4 max-sm:grid-cols-3'>
        {cast.map((actor,i)=>(
            <div key={i} className='m-1'>
                <img src={`${imgPath}${actor.profile_path}`} className='w-[50px] h-[50px] rounded-full'/>
                <p>{actor.name}</p>
            </div>
        ))}
    </div>
  )
}

export default CastList