import React, { Fragment } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header1';
import "./Intro.css"
// import Shape1 from '../../Images/s1.png';
import abimg from '../../Images/s1.png';


const Introduction = () => {

    return (
        <Fragment>
            <Header />
            <section className="wpo-about-section section-padding abs" style={{paddingTop:"10rem"}}>
                <div className="">
                {/* <div className="container"> */}
                    <div className="wpo-about-section-wrapper">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-12 mh" style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}>
                                <div className="wpo-about-img" >
                                <div className="wpo-about-content innercontt" >
                                    <div className="about-title wtclr">
                                        <h2>Introduction</h2>
                                    </div>
                                    <div className="wpo-about-content-inner wtclr">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend suscipit semper. Nunc suscipit augue sed suscipit volutpat. Morbi gravida, orci non pellentesque auctor, ipsum nisi placerat lectus, at fringilla magna ex a felis. Aenean imperdiet semper consequat. Vivamus placerat, orci non interdum efficitur, purus nisi dignissim dolor, ac blandit nibh erat sed enim. Nunc consectetur elementum dictum.</p>
                                    </div>
                                </div>
                                
            {/* <div className="n-shape-intro"> */}
                                    <img src={abimg} alt="" />
            {/* </div> */}
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 col-12">
                                <div className="wpo-about-content boxsdw">
                                    <div className="about-title">
                                        <h2>Where are you located ?</h2>
                                    </div>
                                    <div className="wpo-about-content-inner">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend suscipit semper. Nunc suscipit augue sed suscipit volutpat. </p>
                                    </div>
                                </div>
                                <div className="wpo-about-content boxsdw">
                                    <div className="about-title">
                                        <h2>Whats your skills</h2>
                                    </div>
                                    <div className="wpo-about-content-inner">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend suscipit semper. Nunc suscipit augue sed suscipit volutpat. </p>
                                    </div>
                                </div>
                                <div className="wpo-about-content boxsdw">
                                    <div className="about-title">
                                        <h2>Whats is your knowledge of MERN Stack </h2>
                                    </div>
                                    <div className="wpo-about-content-inner">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend suscipit semper. Nunc suscipit augue sed suscipit volutpat. Morbi gravida, orci non pellentesque auctor, ipsum nisi placerat lectus, at fringilla magna ex a felis</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            <div className="sp-1"></div>
            <div className="sp-2"></div>
            <div className="sp-3"></div>
            </section>
            {/* <Footer /> */}
        </Fragment>
    )
};

export default Introduction;