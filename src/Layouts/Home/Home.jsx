import React, {Fragment} from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header1';
import Hero from '../../components/hero';
import "./Home.css"
import Shape1 from '../../Images/s1.png';


const Home =() => {

    return(
        <Fragment>
            <Header/>
            <Hero />
            <section className={`wpo-newslatter-section section-padding bdrad`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="wpo-section-title-s2">
                            <h2>Greeting !</h2>
                            <h1>Welcome to the  website</h1>
                            <hr style={{margin: "1rem 225px"}}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend suscipit semper. Nunc suscipit augue sed suscipit volutpat. Morbi gravida, orci non pellentesque auctor, ipsum nisi placerat lectus, at fringilla magna ex a felis. Aenean imperdiet semper consequat. Vivamus placerat, orci non interdum efficitur, purus nisi dignissim dolor, ac blandit nibh erat sed enim. Nunc consectetur elementum dictum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend suscipit semper. Nunc suscipit augue sed suscipit volutpat. Morbi gravida, orci non pellentesque auctor, ipsum nisi placerat lectus, at fringilla magna ex a felis. Aenean imperdiet semper consequat. Vivamus placerat, orci non interdum efficitur, purus nisi dignissim dolor, ac blandit nibh erat sed enim. Nunc consectetur elementum dictum.</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="n-shape">
                <img src={Shape1} alt=""/>
            </div>
        </section>
            <Footer/> 
        </Fragment>
    )
};

export default Home;