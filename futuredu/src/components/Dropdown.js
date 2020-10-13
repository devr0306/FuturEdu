import React from "react";

const Dropdown = props => {
    return(
        <div id="accordion">
            <div className="card">
                <div className="card-header">
                    <img className="card-image-top" src={props.image} alt={"Image of " + props.topic} />
                    <a className="card-link" data-toggle="collapse" href={"#collapse"+props.id}>
                        {props.topic}
                    </a>
                <p>Prerequisites : {props.prerequisites}</p>
                </div>
                <div id={"collapse"+props.id} className="collapse" data-parent="#accordion">
                    <div className="card-body">
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;