import React from "react";

function MoviesCard({
  movieObj,
  poster_path,
  name,
  handleAddWatchList,
  handleRemoveWatchList,
  watchList,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <>
      <div
        className="relative bg-center bg-cover h-[50vh] w-[135px] rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        }}
      >
        {doesContain(movieObj) ? (
          <div
            onClick={() => handleRemoveWatchList(movieObj)}
            className="h-8 w-8 flex justify-center rounded-lg m-4 bg-gray-900/60"
          >
            &#10060;
          </div>
        ) : (
          <div
            onClick={() => handleAddWatchList(movieObj)}
            className="h-8 w-8 flex justify-center rounded-lg m-4 bg-gray-900/60"
          >
            &#128525;
          </div>
        )}

        <div className="text-white text-sm text-center w-full bg-gray-900/60 absolute bottom-0 py-2 px-1">
          {name}
        </div>
      </div>
    </>
  );
}

export default MoviesCard;
