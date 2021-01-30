import React from "react";
import { Link } from "react-router-dom";

import '../style/home.css';
import { ReactComponent as EmerginTechSvg } from "../assets/EmerginTech.svg";
import { ReactComponent as SkillsSvg } from "../assets/Skills.svg";
import { ReactComponent as PrereqsSvg } from "../assets/Prereqs.svg";

import FadeIn from "./FadeIn";

import Carousel from "./Carousel";

function Homepage(){
    return(
        <div>
            <Carousel />
        <div className="container-fluid">
            <div className="row d-flex">
                <FadeIn>
                    <div class='svg-div col-md col'>
                        <EmerginTechSvg />
                    </div>
                </FadeIn>
                <FadeIn>
                    <div className='col col-md description-1 ml-3' data-aos="fade-left">
                        <h2>Learn Emerging Technologies and Skills to make yourself<span className='future'> Future Ready</span></h2>
                        <Link to="/etech"><button className='learn'>Learn</button></Link>
                    </div>    
                </FadeIn>
            </div>

            <div className="row d-flex">
                <FadeIn>
                    <div class='svg-div col-md col'>
                        <SkillsSvg />      
                    </div>
                </FadeIn>
                <FadeIn>
                    <div className='col col-md description-1 ml-3' data-aos="fade-left">
                        <h1>With <span className='future'>specialized prerequisites</span> to <br />remove all the obstacles from your learning</h1>
                        <Link to="/prereqs"><button className='learn'>Learn</button></Link>
                    </div>  
                </FadeIn>
            </div>
                <div className="row d-flex">
                    <FadeIn>    
                        <div class='svg-div col-md col'>
                            <PrereqsSvg />
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className='col col-md description-1 ml-3'>
                            <h2>Learn exciting skills like<span className='future'> Trading</span> which are not taught in school &amp; colleges</h2>
                            <Link to="/skills"><button className='learn'>Learn</button></Link>
                        </div>    
                    </FadeIn>
            </div>
        </div>
        </div>
    )
}

export default Homepage;
