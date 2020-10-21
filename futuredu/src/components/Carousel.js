import React from "react";
import { Link } from "react-router-dom";

import "../style/carousel.css";

import EmergingTechImg from "../assets/earth.jpg";
import SkillsImg from "../assets/stocks_unsplash.jpg";
import PrereqsImg from "../assets/coding2.jpg";

function Carousel() {
    return (
        <div id="carouselControls" className="carousel slide" data-ride="carousel">

            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="carousel-image" src={EmergingTechImg} alt="Emerging Tech" />
                    <div className="carousel-caption d-none d-md-block">
                        <Link to="/etech">
                            <h5 className="text-light font-weight-bold">Learn about Emerging Technologies</h5>
                            <p className="text-light">
                                Discover topics like Artificial Intelligence,
                                <br /> Machine Learning, Quantum Computing 
                                <br />and much more!!</p>
                        </Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="carousel-image" src={SkillsImg} alt="Skills" />
                    <div className="carousel-caption d-none d-md-block">
                        <Link to="/skills">
                                <h5 className="text-light font-weight-bold">New Skills</h5>
                                <p className="text-light">
                                    Get Exposure to new skills <br />
                                    that are not being taught in Schools
                                </p>
                        </Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="carousel-image" src={PrereqsImg} alt="Prerequisites" />
                    <div className="carousel-caption d-none d-md-block">
                        <Link to="/prereqs">
                                <h5 className="text-white font-weight-bold">and Many More things!!</h5>
                                <p className="text-light">
                                    Also learn many more things like Coding,<br /> Math and Sciences along the way!!
                                </p>
                        </Link>
                    </div>
                </div>
            </div>

            <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel;