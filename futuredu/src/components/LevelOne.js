import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";

import Card from "./LevelOneCards";

const LevelOne = () => {

    const [cardsData, setCardsData ] = useState([])

    let { lvlone } = useParams();
    
    useEffect(() => {
        const fetchCardData = async () => {
            const res = await fetch("http://157.230.189.117:8000/app/category/"+ lvlone +"?format=json")
            const cards = await res.json()
            setCardsData(cards.card_set)
        }
        fetchCardData()
    },[lvlone])
    

    let CardComponents;

    if(cardsData){
        CardComponents = cardsData.map(topic => {
            return(<Card 
                id={topic.id}
                image={"http://localhost:8000"+topic.image}
                name={topic.name}
                description={topic.description}
                prerequisites={topic.prerequisites ? topic.prerequisites : undefined}
            />)
        })
    }
    
    return(
        <div className="container mb-5">
            <div className="row justify-content-center pt-5">
                {!CardComponents
                    ? <Redirect to="/error" />
                    : CardComponents
                }
            </div>
        </div>
    )
}

export default LevelOne;