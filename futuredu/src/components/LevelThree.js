import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";

import Dropdown from "./Dropdown";

import "../style/dropdown.css";

const LevelThree = () =>{

    let { lvlthree } = useParams();

    const [ topicData, setTopicData ] = useState([])
    const [ topicName, setTopicName ] = useState([])

    useEffect(() => {
        const fetchCardData = async () => {
            const res = await fetch("http://157.230.189.117:8000/app/category/"+ lvlthree +"?format=json")
            const cards = await res.json()
            setTopicData(cards.topic_set)
            setTopicName(cards.name)
        }
        fetchCardData()
    },[lvlthree])

    const dropdownComponents = topicData.map(topic => {
        return(
            <Dropdown 
                id={topic.id_name}
                name={topic.name}
                content={topic.content}
            />
        )
    })

    return(
        <div className="container">
            <div className="card bg-light w-100" id="dropdown-holder">
                <div className="card-header text-center bg-dark text-white h4">{topicName}</div>
                {!dropdownComponents
                    ? <Redirect to="/error" />
                    : dropdownComponents
                }
            </div>
        </div>
    )
}

export default LevelThree;