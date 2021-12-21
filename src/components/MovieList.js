import React from "react";
import Movie from "./Movie";

const MovieList = (props) => {

    const spinner = props.isLoading
    console.log("movielist render");


    return (
        spinner ? <div className="progress">
            <div className="indeterminate"></div>
        </div> : < div className="container" >
            <div className="row">
                <div className="col s12">
                    {
                        props.movies.map((movie, i) => {
                            return (
                                <Movie key={i} movieId={movie.id} viewMovieInfo={props.viewMovieInfo} image={movie.poster_path} />)
                        })
                    }

                </div>
            </div>
        </div >
    )

}

export default MovieList;