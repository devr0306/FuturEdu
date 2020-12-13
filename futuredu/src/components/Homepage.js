import React from "react";
import { Link } from "react-router-dom";

import '../style/home.css';
import { ReactComponent as EmerginTechSvg } from "../assets/EmerginTech.svg";
import { ReactComponent as SkillsSvg } from "../assets/Skills.svg";
import { ReactComponent as PrereqsSvg } from "../assets/Prereqs.svg";

import Carousel from "./Carousel";

function Homepage(){
    return(
        <div>
            <Carousel />
        <div className="container-fluid">
            <div className="row d-flex">
                <div class='svg-div col-md col'>
                    <EmerginTechSvg />
                </div>
                <div className='col col-md description' data-aos="fade-left">
                    <h2>Learn Emerging Technologies and Skills to make yourself<span className='future'> Future Ready</span></h2>
                    <Link to="/etech"><button className='learn'>Learn</button></Link>
                </div>    
            </div>
            <div className="row d-flex">
                <div className='col col-md description-1 ml-3' data-aos="fade-left">
                    <h1>With <span className='future'>specialized prerequisites</span> to <br />remove all the obstacles from your learning</h1>
                    <Link to="/prereqs"><button className='learn'>Learn</button></Link>
                </div>  
                <div class='svg-div col-md col'>
                    <SkillsSvg />      
                </div>
                <div className="row d-flex">
                <div class='svg-div-1 col-md col'>
                    <PrereqsSvg />
                </div>
                <div className='col col-md description-2'>
                    <h2>Learn exciting skills like<span className='future'> Trading</span> which are not taught in school &amp; colleges</h2>
                    <Link to="/etech"><button className='learn'>Learn</button></Link>
                </div>    
            </div>
            </div>        
        </div>
        </div>
    )
}

export default Homepage;
