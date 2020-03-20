import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardBody, Card, Container } from 'reactstrap';

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
            <Container>
                <Card>
                    <CardBody>
                        <h3>ReturnAndExchange</h3>
                        {this.renderContent()}
                    </CardBody>
                </Card>
            </Container>
        )
    }
}

const mapStateToProps = ({ ReturnAndExchange }) => ({
    ReturnAndExchange
})

export default connect(mapStateToProps)(ReturnAndExchange)
