import React from "react";
import { Link } from 'react-router-dom'
import hero from '../../Images/dorm.png'
import "./Hero.css";
import shape4 from '../../Images/s4.png'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Hero = () => {
    return (
        <section className="hero-style-3 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 boxshdw">
                        <div className="wpo-slide-content">
                            <div className="slide-title">
                                <h2>About Me</h2>
                            </div>
                            <div className="wpo-hero-subtitle">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend suscipit semper. Nunc suscipit augue sed suscipit volutpat. Morbi gravida, orci non pellentesque auctor, ipsum nisi placerat lectus, at fringilla magna ex a felis. Aenean imperdiet semper consequat. Vivamus placerat, orci non interdum efficitur, purus nisi dignissim dolor, ac blandit nibh erat sed enim. Nunc consectetur elementum dictum.</p>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-vec">
                            <div className="right-items-wrap">
                                <div className="right-item">
                                    <div className="r-img">
                                        <img src={hero} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="visible-text">
                {/* <h2></h2> */}
            </div>

            <div className="sp-1"></div>
            <div className="sp-2"></div>
            <div className="sp-3"></div>
            <div className="sp-4"><img src={shape4} alt=""></img></div>
        </section>
    )
}

export default Hero;