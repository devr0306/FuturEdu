import React from "react";

import Card from "./Card";

import substopics from "../datasets/subtopics";

function Emerging() {
    return (
        <div className="container">
            <div className="row">
                {substopics.filter(s => s.topicID == 1).map(s => {
                    return (
                        <div className="col-md-4 mb-3">
                            <Card
                                topic={s.name}
                                id="phy"
                                image={s.imageURL}
                                description={s.description}
                                prerequisites="Some prerequisites"
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Emerging;