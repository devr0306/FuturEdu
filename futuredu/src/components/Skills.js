import React from "react";

import Card from "./Card";

import StocksImg from "../assets/stocks.jpg";
var skills = require('../datasets/skills.js')

function Skills(){
    
    return(
        <div className="container">    
        <div className="row col-4">
        {
            skills.map(skill => {
            return(
                <Card 
                topic={skill.name}
                id={skill.subTopicId}
                image={StocksImg}
                description={skill.description}
                prerequisites="Some prerequisites"
                />
             )   
            })
        }
        </div>
    </div> 
    )
}

export default Skills;
