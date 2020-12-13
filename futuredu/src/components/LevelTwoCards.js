import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

import "../style/level-two-cards.css";

const LevelTwoCards = props => {

    let { url } = useRouteMatch();

    return (
        <Link to={`${url}/`+props.id}>

        <div className="card mt-5 mb-3 text-dark shadow">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={props.image} className="card-img" alt={"Image of " + props.name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                        {props.prerequisites != null 
                        ?    <div>
                                <hr />
                                <p className="text-muted">
                                    <small>Prerequisites : {props.prerequisites}</small>
                                </p>
                            </div>
                        :   null
                    }
                    </div>
                </div>
            </div>
        </div>    
        </Link>
    )
}

export default LevelTwoCards;