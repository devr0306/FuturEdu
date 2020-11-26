import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";

import Dropdown from "./Dropdown";

import LevelThreeData from "../datasets/LevelThreeData";

const LevelThree = () =>{

    let { lvlthree } = useParams();

    const [ topicData, setTopicData ] = useState([])

    useEffect(() => {
        const fetchCardData = async () => {
            const res = await fetch("http://127.0.0.1:8000/app/category/"+ lvlthree +"?format=json")
            const cards = await res.json()
            setTopicData(cards.topic_set)
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
            <div className="card bg-light my-4 w-100">
                <div className="card-header text-center bg-dark text-white h4">Algebra</div>
                {!dropdownComponents
                    ? <Redirect to="/error" />
                    : dropdownComponents
                }
            </div>
        </div>
    )
}

export default LevelThree;