import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CardBody, Card } from 'reactstrap';

import AccordianItem from './AccordianItem';
import ContactUs from '../ContactUs/ContactUs'
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

    renderAccordion(pageName) {
        let acData = this.props[pageName];
        if (acData) {
            return this.props[pageName].map((element) => {
                return (
                    <Fragment key={element.id}>

                        <AccordianItem
                            element={element}
                            isOpen={this.state.collapse === element}
                            toggle={this.toggle}
                        />
                    </Fragment>
                )
            })
        }
    }

    renderContent(pageName) {
        if (pageName === 'contact') {
            return <ContactUs />
        }
        else if (pageName === 'shipping') {
            return (
                <Fragment>
                    <div className="px-4 pb-4 col-12 col-md-6">
                        <ShippingAndOrder />
                        <br />
                    </div>
                    {this.renderAccordion(pageName)}
                </Fragment>
            )
        }
        else {
            return this.renderAccordion(pageName);
        }
    }



    renderTitle(pageName) {
        return <div className="widgetTitle card-title pt-4 px-4 mb-0">
            {
                this.props.Sidebar.map(
                    ({ label, id, link, icon, card }) => {
                        return link === `/ap/${pageName}` ?
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
        let pageName = this.props.page;
        return (
            <Card style={{ width: "inherit" }} className={'widgetContainer'}>
                <CardBody className={'p-0'}>
                    {this.renderTitle(pageName)}
                    {this.renderContent(pageName)}
                </CardBody>
            </Card>
        )
    }
}

const mapStateToProps = ({ ReturnAndExchange, ShopWithUs, Global, PrivacyPolicy, Gifts, Sidebar, Shipping }) => ({
    returns: ReturnAndExchange,
    shop: ShopWithUs,
    global: Global,
    privacy: PrivacyPolicy,
    gifts: Gifts,
    shipping: Shipping,
    Sidebar
})

export default connect(mapStateToProps)(RootAccordian)
