import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CardBody, Card } from 'reactstrap';

import RaEList from './RaEList';

class ReturnAndExchange extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {};
    }


    toggle(element) {
        this.setState({ collapse: this.state.collapse === element ? null : element });
    }

    renderContent() {
        return this.props.ReturnAndExchange.map((element) => {
            return (
                <RaEList key={element.id}
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
                        <Link to="/ap/returns" id="3" className="nav-link">
                            <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 612 792"
                                className="svg assistCatIcon tag-svg assistCatIcon">
                                <path d="M162,459.9h39c26.6-149.6,157.4-265,316.4-265c6.3,0,12.4,0,18.7,0L466,263.4c-7.8,7.8-7.8,18.7,0,26.6  c3.1,3.1,7.8,6.3,13.9,6.3c6.1,0,9.4-1.5,13.9-6.3l112.3-115.4L493.9,59.2c-7.8-7.8-18.7-7.8-26.6,0s-7.8,18.7,0,26.6l68.6,68.6  c-6.3,0-12.4,0-17.2,0C336.4,157.4,186.8,288.5,162,459.9z"></path><path d="M536.1,611.2H43.3V232.3h152.9l39-37.4l-1.5-1.5H43.3c-20.3,0-37.4,17.2-37.4,37.4v378.9c0,20.3,17.2,37.4,37.4,37.4h492.8  c20.3,0,37.4-17.2,37.4-37.4V313.5l-37.4,35.9V611.2z"></path>
                            </svg>
                            Returns &amp; Exchanges
                        </Link>
                    </div>
                    {this.renderContent()}
                </CardBody>
            </Card>
        )
    }
}

const mapStateToProps = ({ ReturnAndExchange }) => ({
    ReturnAndExchange
})

export default connect(mapStateToProps)(ReturnAndExchange)
