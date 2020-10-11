import React from "react";

const Dropdown = props => {
    return(
        <div id="accordion">
            <div className="card">
                <div className="card-header" id="headingOne">
                    {/* <img className="card-image-left" src={props.image} alt={"Image of " + props.topic} /> */}
                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        {props.topic}
                    </button>
                <p>Prerequisites : {props.prerequisites}</p>
                </div>
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;