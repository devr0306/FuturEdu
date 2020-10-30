import React from "react";
import { Link } from "react-router-dom";

const LevelOneCards = props => {

    return (
        <div className="card text-dark" id={props.id}>
            <Link to="/math">
                <img src={props.image} className="card-img-top" alt={props.name} />
            </Link>

            <div className="card-body">
                <Link to="/math">
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
    )

}

export default LevelOneCards;