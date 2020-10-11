import React from "react";

import Dropdown from "./Dropdown";

function Emerging(){
    return(
        <div className="container">
            <Dropdown
                topic="Artificial Intelligence"
                id="ml"
                prerequisites="some prerequisites"
                description={'Machine Learning\\n' +
                '-	Models\n' +
                "o	Machine Learning by Stanford- https://www.coursera.org/learn/machine-learning\n" +
                "o	YouTube- https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU\n\n" +
                "-	Using Models\n" +
                "o	Scikit-Learn- https://www.youtube.com/watch?v=pqNCD_5r0IU\n\n" +
                "Deep Learning\n" +
                "-	Models\n" +
                "o	Deep Learning- https://www.youtube.com/watch?v=VyWAvY2CF9c\n" +
                "o	MIT Course- https://www.youtube.com/watch?v=FkHWKq86tSw&list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI&index=28\n\n" +
                "-	Using Models\n" + 
                "o	TensorFlow- https://www.youtube.com/watch?v=tPYj3fFJGjk\n"}
                
            />
            <Dropdown
                topic="Quantum Computing"
                id="dl"
                prerequisites="some prerequisites"
                description="Introduction to Quantum Computing
                -	YouTube
                o	CMU- https://www.youtube.com/playlist?list=PLm3J0oaFux3YL5qLskC6xQ24JpMwOAeJz
                o	UC Berkeley- https://www.youtube.com/playlist?list=PL74Rel4IAsETUwZS_Se_P-fSEyEVQwni7
                "
            />
        </div>
    )
}

export default Emerging;
