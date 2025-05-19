import React from 'react'
import MoviesCard from './MoviesCard'
import {useEffect,useState} from 'react'
import axios from 'axios'
import Pagination from './Pagination';

function Movies({handleAddWatchList,handleRemoveWatchList,watchList}) {
  const [movies, setMovies] = useState([]);
  const [PageNo, setPageNo] = useState(1);

  const handlePrev = ()=>{
    if(PageNo===1){
      setPageNo(PageNo)
    }
    else{
    setPageNo(PageNo-1)
    }  
  }
  const handleNext = ()=>{
     setPageNo(PageNo+1)
  }

  useEffect(()=> {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${PageNo}`).then(function(res){
      setMovies(res.data.results);
    });
  },[PageNo])
  return (
    <>
    <div className='p-5 '>
      <div className='text-center m-5 font-bold text-2xl '>Trending Movies</div>
      <div className='flex flex-row flex-wrap justify-around gap-8'>
        {movies.map(movieObj=>{
          return <MoviesCard  key = {movieObj.id} movieObj={movieObj} poster_path = {movieObj.poster_path} name = {movieObj.original_title} handleAddWatchList={handleAddWatchList} handleRemoveWatchList = {handleRemoveWatchList} watchList={watchList}/>
        })}
      </div>
      
        <Pagination PageNo = {PageNo} handlePrev = {handlePrev} handleNext = {handleNext} />
      
     
    </div>
    </>
  )
}

export default Movies
