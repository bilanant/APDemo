import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CardBody, Card } from 'reactstrap';

import ContactUs from '../ContactUs/ContactUs'
import AccordianItem from './AccordianItem';
import ShippingAndOrder from '../ShippingAndOrder/ShippingAndOrder'

class RootAccordian extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {};
    }

    toggle(element) {
        this.setState({ collapse: this.state.collapse === element ? null : element });
    }

    renderContent() {  
        if(this.props.page === 'shipping'){
            return <div className="px-4 pb-4 col-12 col-md-6"><ShippingAndOrder/></div>
        } 
        if(this.props.page === 'contact'){
            return <ContactUs/>
        }
        else{
            let acData = this.props[this.props.page];
            if(acData){
                return  this.props[this.props.page].map((element) => {
                    return (
                    <React.Fragment>
                        <AccordianItem key={element.id}
                            element={element}
                            isOpen={this.state.collapse === element}
                            toggle={this.toggle} 
                        />
                    </React.Fragment>
                    )
                })
            }
        }
    }

    

    renderTitle(){
        return <div className="widgetTitle card-title pt-4 px-4 mb-0">
        {
            this.props.Sidebar.map(
                ({ label, id, link, icon, card }) => 
                {              
                    return link === '/ap/'+this.props.page ?             
                        <Link className="nav-link" to={link} key={id} >
                            {card ? icon : ''}{label}
                        </Link>
                    : ''
                }   
            )
        }
        
    </div>
    }

    render() {
        return (
            <Card style={{ width: "inherit" }} className={'widgetContainer'}>
                <CardBody className={'p-0'}>
                    {this.renderTitle()}
                    {this.renderContent()}
                </CardBody>
            </Card>
        )
    }
}

const mapStateToProps = ({ ReturnAndExchange, Global, PrivacyPolicy, Gifts, Sidebar}) => ({
    returns :ReturnAndExchange,
    global :Global,
    privacy :PrivacyPolicy,
    gifts :Gifts,
    Sidebar
})

export default connect(mapStateToProps)(RootAccordian)
