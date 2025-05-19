import "./App.css";
import Navbar from "./Components/Navbar";
import Movies from "./Components/Movies";
import Watchlist from "./Components/Watchlist";
import Banner from "./Components/Banner";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  let [watchList, setWatchList] = useState([]);
  let handleAddWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj];
    localStorage.setItem('moviesApp',JSON.stringify(newWatchList))
    setWatchList(newWatchList);
  };
  let handleRemoveWatchList = (movieObj) => {
    let filteredWatchList = watchList.filter((movie) => {
      return movie.id != movieObj.id;
    });
    
    setWatchList(filteredWatchList);
    localStorage.setItem('moviesApp',JSON.stringify(filteredWatchList))
  };
  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  },[])
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Banner />{" "}
                <Movies
                  watchList={watchList}
                  handleAddWatchList={handleAddWatchList}
                  handleRemoveWatchList={handleRemoveWatchList}
                />{" "}
              </>
            }
          ></Route>
          <Route
            path="/Watchlist"
            element={<Watchlist watchList={watchList} setWatchList={setWatchList} handleRemoveWatchList={handleRemoveWatchList} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
