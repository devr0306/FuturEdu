import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";

import Card from "./LevelTwoCards";
import FadeIn from "./FadeIn"

function LevelTwo() {

    let { lvltwo } = useParams();

    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        const fetchCardData = async () => {
            const res = await fetch("http://157.230.189.117:8000/app/category/" + lvltwo + "?format=json")
            const cards = await res.json()
            setCardsData(cards.card_set)
        }
        fetchCardData()
    }, [lvltwo])

    let CardComponents;

    if (cardsData) {
        CardComponents = cardsData.map(topic => {
            return (
                <FadeIn>
                    <div className="row mb-3">
                        <div className="col">
                            <Card
                                id={topic.id}
                                image={"http://157.230.189.117:8000" + topic.image}
                                name={topic.name}
                                description={topic.description}
                                prerequisites={topic.prerequisites ? topic.prerequisites : undefined}
                            />
                        </div>
                    </div>
                </FadeIn>
            )
        })
    }

    console.log(CardComponents)

    return (
        <div className="container">
            {!CardComponents
                ? <Redirect to="/error" />
                : CardComponents
            }
        </div>
    )
}

export default LevelTwo;