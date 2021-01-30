import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import "../style/level-one-cards.css";

const LevelOneCards = props => {

    let { url } = useRouteMatch();

    return (
        <div className="col-auto mt-2 mb-3 rounded-lg" style={{width:"23rem"}}>
            <div className="card text-dark shadow" id={props.id}>
                <Link to={`${url}/`+props.id}>
                    <img src={props.image} className="card-img-top" alt={props.name+"Image"} />
                </Link>
                <div className="card-body">
                    <Link to={`${url}/`+props.id}>
                        <a href={`${url}/`+props.id}><h5 className="card-title d-inline">{props.name}</h5></a>
                    </Link>
                    <button 
                        class="fas fa-angle-down float-right mt-1" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target={"#"+props.id+"collapse"} 
                    />

                    <div className="collapse" id={props.id+"collapse"}>
                        <p className="pt-3">{props.description}</p>
                        
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
    )

}

export default LevelOneCards;