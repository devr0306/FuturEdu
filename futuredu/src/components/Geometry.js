import React from "react";

import Card from "./Card";

import subskills from "../datasets/subskills";

function Geometry() {
    return (
        <div className="container">
            <div className="row">
                {subskills.filter(s => s.topicID == 22).map(s => {
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

export default Geometry;