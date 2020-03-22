import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CardBody, Card } from 'reactstrap';

import SwUList from './SwUList';

class ShopWithUs extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {};
    }


    toggle(element) {
        this.setState({ collapse: this.state.collapse === element ? null : element });
    }

    renderContent() {
        return this.props.ShopWithUs.map((element) => {
            return (
                <SwUList key={element.id}
                    element={element}
                    isOpen={this.state.collapse === element}
                    toggle={this.toggle} />
            )
        })
    }

    render() {
        return (
            <Card style={{ width: "inherit" }} className={'widgetContainer'}>
                <CardBody className={'p-0'}>
                    <div className="widgetTitle card-title pt-4 px-4 mb-0">
                        <Link to="/ap/shop" id="3" className="nav-link">
                            <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-282 372.9 47 47.1" className="svg assistCatIcon tag-svg assistCatIcon">
                                <path d="M-235,416.1l-3.8-23.1c-0.3-3-3.1-5.4-6.1-5.4h-3.2v-3.9c0-6-4.3-10.8-10.3-10.8c-6,0-10.3,4.9-10.3,10.8v3.9h-3.5  c-3,0-5.8,2.4-6.1,5.4l-3.6,23.1c-0.1,1.2,0.1,2.2,0.7,2.9c0.6,0.6,1.4,1,2.5,1h40.2c1.5,0,2.4-0.6,2.8-1.1  C-235.4,418.3-234.9,417.5-235,416.1z M-265.9,383.7c0-4.3,3-7.9,7.4-7.9s7.3,3.5,7.3,7.9v3.9h-14.7V383.7z M-238.5,416.9h-40.1  c-0.3,0-0.5-0.1-0.4-0.5l3.6-23.1c0.2-1.5,1.6-2.8,3.2-2.8h3.5v3.3c-0.9,0.5-1.5,1.4-1.5,2.5c0,1.6,1.3,2.9,2.9,2.9s2.9-1.3,2.9-2.9  c0-1.1-0.6-2-1.5-2.5v-3.3h14.7v3.3c-0.9,0.5-1.5,1.4-1.5,2.5c0,1.6,1.3,2.9,2.9,2.9c1.6,0,2.9-1.3,2.9-2.9c0-1.1-0.6-2-1.5-2.5  v-3.3h3.2c1.5,0,3,1.3,3.2,2.9l3.8,23.1C-237.9,416.7-238.1,416.9-238.5,416.9z"></path>
                            </svg>
                            Shop with US
                        </Link>
                    </div>
                    {this.renderContent()}
                </CardBody>
            </Card>
        )
    }
}

const mapStateToProps = ({ ShopWithUs }) => ({
    ShopWithUs
})

export default connect(mapStateToProps)(ShopWithUs)
