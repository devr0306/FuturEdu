import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const LevelOneCards = props => {

    let { url } = useRouteMatch();

    return (
        <div className="col-4 mb-5">
            <div className="card text-dark" id={props.id}>
                <Link to={`${url}/`+props.id}>
                    <img src={props.image} className="card-img-top" alt={props.name} />
                </Link>
                <div className="card-body">
                    <Link to={`${url}/`+props.id}>
                        <h5 className="card-title d-inline">{props.name}</h5>
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