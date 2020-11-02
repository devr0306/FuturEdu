import React from "react";

import Card from "./LevelTwoCards";

import AlgebraImage from "../assets/math.jpg";
import GeoImage from "../assets/tools.jpg";
import VectorImage from "../assets/physics.jpg";

function LevelTwo() {
    return (
        <div className="container">
            <div className="row mt-5 mb-3">
                <div className="col">
                    <Card 
                        id="algebra"
                        name="Algebra"
                        image={AlgebraImage}
                        description="Algebra is one of the broad parts of mathematics,together with number theory, geometry and analysis. In its most general form, algebra is the study of mathematical symbols and the rules for manipulating these symbols; it is a unifying thread of almost all of mathematics."
                    />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <Card 
                        id="geometry"
                        name="Geometry"
                        image={GeoImage}
                        description="Geometry is, with arithmetic, one of the oldest branches of mathematics. It is concerned with properties of space that are related with distance, shape, size, and relative position of figures. A mathematician who works in the field of geometry is called a geometer"
                    />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <Card 
                        id="vectors"
                        name="Vectors"
                        image={VectorImage}
                        description="In mathematics and physics, a vector is an element of a vector space. For many specific vector spaces, the vectors have received specific names, which are listed below. Historically, vectors were introduced in geometry and physics before the formalization of the concept of vector space"
                        prerequisites="Geometry and Trignometry"
                    />
                </div>
            </div>
        </div>
    )
}

export default LevelTwo;