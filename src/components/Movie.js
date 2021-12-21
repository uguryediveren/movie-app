import React from "react";

const Movie = (props) => {

    const image = props.image == null ? `https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg` : `http://image.tmdb.org/t/p/w185${props.image}`

    console.log("movie render");


    return (

        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">

                    <img src={image} alt="card_image" style={{ width: "100%", height: 360 }} />
                    <img src="" alt="" />
                </div>
                <div className="card-content">
                    <p ><a href="#/" onClick={()=>props.viewMovieInfo(props.movieId)}>View Details</a></p>
                </div>
            </div>
        </div>
    );
}

export default Movie;