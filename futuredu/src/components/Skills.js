import React from "react";

import Card from "./Card";

import StocksImg from "../assets/stocks.jpg";
import subtopics from "../datasets/subtopics";

var skills = require('../datasets/skills.js')

function Skills() {
    return (
        <div className="">
            <div className="col-md-4 mb-3">
                {
                    subtopics.filter(s => s.topicID == 2).map(s => {
                        return (<Card
                            topic={s.name}
                            id="stockMarket"
                            image={StocksImg}
                            description={s.description}
                            prerequisites="Some prerequisites"
                        />)
                    })
                }
            </div>
        </div>
    )
}

export default Skills;
