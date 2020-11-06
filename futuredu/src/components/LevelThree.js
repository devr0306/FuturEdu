import React from "react";
import { useParams, Redirect } from "react-router-dom";

import Dropdown from "./Dropdown";

import LevelThreeData from "../datasets/LevelThreeData";

const LevelThree = () =>{

    let { lvlthree } = useParams();

    const dropdownComponents = LevelThreeData.filter(topic => topic.category === lvlthree).map(filteredTopics => {
        return(
            <Dropdown 
                id={filteredTopics.id}
                name={filteredTopics.name}
                content={filteredTopics.content}
            />
        )
    })

    return(
        <div className="container">
            <div className="card bg-light my-4 w-100">
                <div className="card-header text-center bg-dark text-white h4">Algebra</div>
                {Object.entries(dropdownComponents).length === 0 
                    ? <Redirect to="/error" />
                    : dropdownComponents
            }
            </div>
        </div>
    )
}

export default LevelThree;