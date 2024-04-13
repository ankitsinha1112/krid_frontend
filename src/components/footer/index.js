import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Images/logo.png'
import './footer.css'


const Footer = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-5 col-md-7 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    {/* <img src={Logo} alt="footer" /> */}
                                    <h3>About</h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend suscipit semper. Nunc suscipit augue sed suscipit volutpat. 
                                    <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend suscipit semper. Nunc suscipit augue sed suscipit volutpat. 
                                </p>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-5 col-sm-12 col-12">
                            <div className="widget link-widget s1">
                                <div className="widget-title">
                                    <h3>Information</h3>
                                </div>
                                <ul style={{paddingLeft: "3px"}}>
                                        <li><Link onClick={ClickHandler} to={`#`}>Home</Link></li>
                                        <li><Link onClick={ClickHandler} to={`#`}>About us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <div className="contact-ft">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend suscipit semper. Nunc suscipit augue sed suscipit volutpat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;