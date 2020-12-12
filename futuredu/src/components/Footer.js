import React from "react";

import "../style/footer.css";

function Footer(){
    return(
        <footer className="footer py-4 mt-5">
            <div className="container-fluid">
                <div className="row justify-content-between">
                    <div className="col-3">
                        <img className="img-thumbnail" src='' alt="Logo" />
                        <h3 className="d-inline">FuturEdu</h3>
                    </div>
                    <div className="col-6 text-right">
                        <ul className="d-inline">
                            <a id="footer-links" href="/"><li className="d-inline">Home</li></a>
                            <a id="footer-links" href="/prereqs"><li className="d-inline">Prerequisites</li></a>
                            <a id="footer-links" href="/etech"><li className="d-inline">Emerging Technologies</li></a>
                            <a id="footer-links" href="/skills"><li className="d-inline">Skills</li></a>
                            <a id="footer-links" href="mailto:"><li className="d-inline">Contact Us</li></a>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row justify-content-center mb-3">
                    <div className="col-1 text-center">
                        <button 
                            className="fab fa-instagram" 
                            id="social-media-links" 
                            type="button" 
                            target="_blank"
                        />
                    </div>
                    <div className="col-1 text-center">
                        <button 
                            className="fab fa-linkedin-in" 
                            id="social-media-links" 
                            type="button" 
                            target="_blank"
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;