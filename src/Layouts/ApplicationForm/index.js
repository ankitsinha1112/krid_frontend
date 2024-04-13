import React, {Fragment} from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header1';
import Form from '../../components/Form';
import "./Form.css"


const ApplicationForm =() => {

    return(
        <Fragment>
            <Header/>
            <section className={`wpo-newslatter-section section-padding `}>
            <div className="container formcontainer">
                <div className="row justify-content-center">
                    <div className="col-xl-5">
                        <div className="wpo-section-title-s2">
                            <h2>Application Form</h2>
                            <hr style={{margin: "1rem 175px"}}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend suscipit semper. Nunc suscipit augue sed suscipit volutpat. </p>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="wpo-section-title-s2 wpo-contact-pg-section">
                            <hr style={{margin: "1rem "}}/>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <Footer/> 
        </Fragment>
    )
};

export default ApplicationForm;