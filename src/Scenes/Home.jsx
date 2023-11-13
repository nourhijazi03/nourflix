import React, { useEffect,useState } from 'react';
import ComingSoon from '../Components/ComingSoon';
import Carousel from '../Components/Carousel';
import FadeIn from '../Components/FadeIn';

function Home() {

  const API_URLS='https://api.themoviedb.org/3/movie/upcoming?api_key=ec1f151ba5f204f487aaa0670391857f';
  const popularAPI="https://api.themoviedb.org/3/movie/popular?api_key=ec1f151ba5f204f487aaa0670391857f";
  const popularSAPI="https://api.themoviedb.org/3/tv/popular?api_key=ec1f151ba5f204f487aaa0670391857f"
  const[comingSoon,setComingSoon]=useState([]);
  const[popular,setPopular]=useState([]);
  const[popularS,setPopularS]=useState([]);


//coming soon
  useEffect(()=>{
    fetch(API_URLS)
    .then((res)=>res.json())
    .then((data)=>setComingSoon(data.results))
  },[]);
  const comingSlide=comingSoon.filter((item,index)=>index<5);

  //popular movies
  useEffect(()=>{
    fetch(popularAPI)
    .then((res)=>res.json())
    .then((data)=>setPopular(data.results));
  },[])


  //popular Series
  useEffect(()=>{
    fetch(popularSAPI)
    .then((res)=>res.json())
    .then((data)=>setPopularS(data.results));
  },[])


  return (
    <div>
      <div className='w-full h-screen'>
      {comingSlide!==undefined &&(
        <ComingSoon slide={comingSlide}/>
      )}
      </div>


      <div id='popularMovies' className=' bg-first-200 p-3'>
        <FadeIn duration={0.3} direction="right">
        <h1 className='text-additional-100 text-2xl font-semibold
        border-l-4 border-double border-additional-100 '>Popular Movies</h1>
        </FadeIn>
        <Carousel items={popular} type="movie"/>

      </div>

      <div id='popularSeries' className='bg-first-200 p-3'>
      <FadeIn duration={0.3} direction="right">
        <h1 className='text-additional-100 text-2xl font-semibold
        border-l-4 border-double border-additional-100 '>Popular Series</h1>
      </FadeIn>
        <Carousel items={popularS} type="tv"/>

      </div>


    </div>
  )
}

export default Home 