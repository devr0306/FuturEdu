import React from "react";

const Card = props => {
    return(
        <div className="card text-center p-2" id="topicCard">
            <img src={props.image} className="card-image" alt={"Image of "+props.topic} />
            <div className="card-image-overlay">
                <h5 className="card-title">{props.topic}</h5>
                <button 
                    className="btn m-2" 
                    data-toggle="collapse" 
                    data-target={"#details"+props.id}
                    aria-expanded="false"
                    aria-controls={"details"+props.id}
                >
                    More Info
                </button>
                <div className="collapse" id={"details"+props.id}>
                    <div>
                        <p className="card-text">{props.description}</p>
                        <p className="card-text">{props.prerequisites}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;