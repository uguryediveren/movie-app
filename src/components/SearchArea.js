import React from "react";

const SearchArea = (props) => {

    console.log("searcharea render");



    return (
        <div className="container">
            <div className="row">
                <section className="col s4 offset-s4">
                    <form action="" onSubmit={props.handleSubmit}>

                        <div className="input-field">
                            <input onChange={props.handleChange} placeholder="Search Movie" type="text" value={props.search} />
                        </div>

                    </form>
                </section>
            </div>
        </div>


    );
}

export default SearchArea;