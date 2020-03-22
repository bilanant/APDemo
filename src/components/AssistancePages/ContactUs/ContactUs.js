
import React, { Component, Fragment } from 'react';
import './ContactUs.css';

class ContactUs extends Component {
    render(){
        return (
            <Fragment>
               <div className={"grid-100 grid-parent col-12 m-auto px-4"}>
                    <div id="contact_section1" className={'row m-0'}>
                        <div className={"mobile-grid-100 block col-12 col-md mb-2"}>
                            <h3>Call</h3>
                            <a href="tel:18888884757">1.888.888.4757</a><br/>
                            <p>For a question regarding your online order, contact a Neiman Marcus associate for assistance 7 Days a week, 6 am to Midnight Central Time.</p>
                        </div>
                        
                        <div className={"mobile-grid-100 block col-12 col-md mb-2"}>
                            <h3>Chat / Text</h3>
                            <a href="ghg" className={"chat"}>Chat with us <span className={"arrowImage"}></span></a>
                            <p>From your tablet, laptop or desktop.</p><br/>
                            <a href="sms:9724761801">Text 972.476.1801</a>
                            <p>Connect with live assistance online anytime. Customer service is just a click away.</p>
                        </div>
                        
                        <div className={"mobile-grid-100 block col-12 col-md mb-2"}>
                            <h3>Email</h3>
                            <a className={"init-emailforward"} href="fd" emailtype="custemailforwarding" subject="" subjectcontrol="ref_contactus_subject" id="ref_EmUs_action">Email us <span className={"arrowImage"}></span></a>
                            <p>Prefer electronic inquiries? We can send answers to your inbox.</p>
                            
                        </div>
                        <div className={"clear"}></div>
                    </div>
                    
                    <div id="contact_section2" className={'row m-0'}>
                        <div className={"mobile-grid-100 block col-12 col-md-4 mb-2"}>
                            <h3>NM Credit Services</h3>
                            <p>For automated account information, to change your account address, or for other account services, call anytime.<br/> 
                            <a href="tel:18006856695">1.800.685.6695</a></p>
                        </div>
                        
                        <div className={"mobile-grid-100 block col-12 col-md-4 mb-2"}>
                            <h3>Designer Representatives &amp; Vendor Opportunities</h3>
                            <p>Representing a designer or label? We'd love to hear ideas on how we can work together.<br/> 
                            <a href="tel:18009379146">1.800.937.9146</a></p>
                        </div>
                        <div className={"clear"}></div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ContactUs





