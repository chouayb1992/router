import React from 'react';
import {MovieCard} from './MovieCard';


function MovieList({list}) {

    return (


        <div>


            <h2>Movies List:</h2>
            <div className="movies-list" style={{display : "flex" , justifyContent :"space-around"}}>
                {list.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default MovieList;