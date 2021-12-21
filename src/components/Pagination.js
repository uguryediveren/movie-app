import React from "react";

const Pagination = (props) => {

    console.log("currentPage", props.currentPage);

    console.log("pagination render");

    const pageLinks = []

    for (let i = 1; i <= props.pages; i++) {

        let active = props.currentPage === i ? 'active' : ''

        pageLinks.push(
            <li className={`waves-effect ${active}`} key={i} onClick={() => props.nextPage(i)}>
                <a href="#/">{i}</a>
            </li>
        )
    }

    return (
        <div className="container center-align">
            <div className="row">
                <ul className="pagination">
                    <li className="disabled"><a href="#!"><i className="material-icons"></i></a></li>
                    {props.currentPage > 1 ? <li className="waves-effect" onClick={() => props.nextPage(props.currentPage - 1)}><a href="#/">Prev</a></li> : ""}
                    {pageLinks}
                    {props.currentPage < props.pages ? <li className="waves-effect" onClick={() => props.nextPage(props.currentPage + 1)}><a href="#/">Next</a></li> : ""}
                    <li className="waves-effect"><a href="#!"><i className="material-icons"></i></a></li>
                </ul>
            </div>
        </div>
    )

}

export default Pagination;