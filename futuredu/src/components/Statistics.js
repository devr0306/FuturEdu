import React from "react";

import Card from "./Card";

import subskills from "../datasets/subskills";

function Statistics() {
    return (
        <div className="container">
            <div className="row">
                {subskills.filter(s => s.topicID == 25).map(s => {
                    return (
                        <div className="col-md-4 mb-3">
                            <Card
                                topic={s.name}
                                id={s.name}
                                image={s.imageURL}
                                description={s.description}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Statistics;