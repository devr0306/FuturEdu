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
				<div class='svg-div col-md col'>
					<FadeIn>
						<EmerginTechSvg />
					</FadeIn>
				</div>
				<div className='col col-md description-1 ml-3' data-aos="fade-left">
					<FadeIn>
                        <h2>Learn Emerging Technologies and Skills to make yourself<span className='future'> Future Ready</span></h2>
                        <Link to="/etech"><button className='learn'>Learn</button></Link>
                    </FadeIn>
				</div>    
            </div>
            <div className="row d-flex">
                <div class='svg-div col-md col'>
					<FadeIn>
                        <SkillsSvg />  
					</FadeIn>
				</div>
                <div className='col col-md description-1 ml-3' data-aos="fade-left">
					<FadeIn>
                        <h1>With <span className='future'>specialized prerequisites</span> to <br />remove all the obstacles from your learning</h1>
                        <Link to="/prereqs"><button className='learn'>Learn</button></Link>
					</FadeIn>
				</div>  
                
            </div>
			<div className="row d-flex"> 
				<div class='svg-div col-md col'>
					<FadeIn>
						<PrereqsSvg />
					</FadeIn>
				</div>
				<div className='col col-md description-1 ml-3'>
					<FadeIn>			
						<h2>Learn exciting skills like<span className='future'> Trading</span> which are not taught in school &amp; colleges</h2>
						<Link to="/skills"><button className='learn'>Learn</button></Link>  
					</FadeIn>
				</div>
            </div>
        </div>
        </div>
    )
}

export default Homepage;
