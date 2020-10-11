import React from "react";

import Card from "./Card";

import substopics from "../datasets/subtopics";

function Emerging() {
    return (
        <div className="">
            <div className="row">
                {substopics.filter(s => s.topicID == 1).map(s => {
                    return (
                        <div className="col-md-4 mb-3">
                            <Card
                                topic={s.name}
                                id="phy"
                                image={s.imageURL}
                                description={s.description}
                                prerequisites="Machine Learning
                                -	Models
                                o	Machine Learning by Stanford- https://www.coursera.org/learn/machine-learning
                                o	YouTube- https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU
                                
                                -	Using Models
                                o	Scikit-Learn- https://www.youtube.com/watch?v=pqNCD_5r0IU
                                
                                Deep Learning
                                -	Models
                                o	Deep Learning- https://www.youtube.com/watch?v=VyWAvY2CF9c
                                o	MIT Course- https://www.youtube.com/watch?v=FkHWKq86tSw&list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI&index=28
                                
                                -	Using Models
                                o	TensorFlow- https://www.youtube.com/watch?v=tPYj3fFJGjk
                                
                                "
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Emerging;