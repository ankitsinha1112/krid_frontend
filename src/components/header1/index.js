import React, { useState } from 'react'
import MobileMenu from "./MobileMenu";
import { Link } from 'react-router-dom'
import Logo from '../../Images/logo.png'
import "./Header.css";

const Header = () => {

  const [menuActive, setMenuState] = useState(false);
  const SubmitHandler = (e) => {
      e.preventDefault()
  }

  const ClickHandler = () => {
      window.scrollTo(10, 0);
  }
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const className = scroll > 80 ? "fixed-navbar active" : "fixed-navbar";

    return (
      <div className={className}>
      <header id="header">
        <div className={`wpo-site-header`}>
          <nav className="navigation navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                  <div className="mobail-menu">
                    <MobileMenu />
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-6">
                  <div className="navbar-header">
                    <Link onClick={ClickHandler} className="navbar-brand logo nn" to="#">
                      <img src={Logo} alt="" />
                      <p className='verticallign'>                 
<span style={{color:"rgba(189, 36, 36, 1)"}}>
V
L
S
S</span></p>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-9 col-md-1 col-1">
                  <div id="navbar" className="collapse navbar-collapse navigation-holder mid-term">
                    <button className="menu-close"><i className="ti-close"></i></button>
                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                      <li className="menu-item-has-children">
                        <Link to="/" >Home</Link>
                        <ul className="sub-menu">
                          <li><Link onClick={ClickHandler} to="/">Home</Link></li>
                          <li><Link onClick={ClickHandler} to="/introduction">Introduction</Link></li>
                          <li><Link onClick={ClickHandler} to="/application-form">Application Form</Link></li>
                        </ul>
                      </li>
                      <li><Link onClick={ClickHandler} to="#">Page 2</Link></li>
                      <li><Link onClick={ClickHandler} to="#">Page 3</Link></li>
                      <li><Link onClick={ClickHandler} to="#">Page 4</Link></li>
                      <li><Link onClick={ClickHandler} to="#">Page 5</Link></li>
                      <li><Link onClick={ClickHandler} to="#">Page 6</Link></li>
                      <li><Link onClick={ClickHandler} to="#">Page 7</Link></li>
                    </ul>

                  </div>
                </div>
                <div className="col-lg-1 col-md-2 col-2">
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      </div>
    )
  }

export default Header;

