import React from "react";

import Card from "./Card";

import StocksImg from "../assets/stocks.jpg";

function EmerginTech(){
    return(
        <div className="container">
        <div className="col-md-4 mb-3">
            <Card 
                topic="Stock Market"
                id="stockMarket"
                image={StocksImg}
                description="Some Stock Market stuff"
                prerequisites="Some prerequisites"
                />
            </div>
        </div> 
    )
}

export default EmerginTech;