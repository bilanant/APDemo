import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CardBody, Card } from 'reactstrap';

import GList from './GList';

class Gifts extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {};
    }


    toggle(element) {
        this.setState({ collapse: this.state.collapse === element ? null : element });
    }

    renderContent() {
        return this.props.Gifts.map((element) => {
            return (
                <GList key={element.id}
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
                        <Link to="/ap/gifts" id="3" className="nav-link">
                            <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-281 373.1 48 48.2" className="svg assistCatIcon tag-svg assistCatIcon">
                                <path d="M-257,373.3c-13.3,0-24,10.7-24,24s10.7,24,24,24c13.3,0,24-10.7,24-24C-233,384.1-243.7,373.3-257,373.3z M-278,397.3  c0-11.6,9.4-21,21-21c5.6,0,10.7,2.2,14.4,5.8l-10.1,10.1c-0.1-2.5-2.1-4.4-4.6-4.4s-4.6,2.1-4.6,4.6c0,0.5,0.1,0.9,0.2,1.3  c-0.3,0-0.5-0.1-0.8-0.1c-2.5,0-4.6,2.1-4.6,4.6c0,2.3,1.7,4.2,3.9,4.5l-9.1,9.2C-275.8,408-278,402.9-278,397.3z M-258.4,398  c0.1,0.2,0.2,0.3,0.2,0.4c0,0.4-0.1,0.7-0.4,0.9c-0.3,0.2-0.6,0.3-0.8,0.5c-0.4,0.3-0.9,0.6-1.3,0.9c-0.3,0.2-0.7,0.5-1,0.7  c0,0-0.1,0.1-0.2,0.1c-0.1,0.1-0.3,0.2-0.4,0.2c-2,0-3.6-1.6-3.6-3.6s1.6-3.6,3.6-3.6C-262,394.5-259.2,396.9-258.4,398z   M-260.8,392.3c0-2,1.6-3.6,3.6-3.6c2,0,3.6,1.6,3.6,3.6c0,0.2-0.4,0.9-1,1.8c-0.9,1.4-2.1,3-2.4,3c-0.1,0-0.2-0.1-0.4-0.2  c-0.5-0.4-1.4-1.5-1.5-1.7c-0.3-0.4-0.6-0.9-0.9-1.3c-0.2-0.3-0.5-0.7-0.7-1C-260.6,392.7-260.8,392.5-260.8,392.3z M-260.5,402.9  l0.1-0.1c0.2-0.3,0.4-0.6,0.6-0.9c0.3-0.4,0.6-0.9,0.9-1.3c0.2-0.3,1.5-1.9,1.9-1.9c0.1,0,0.2,0.1,0.4,0.3c1,1,3,4.1,3,4.5  c0,2-1.6,3.6-3.6,3.6s-3.6-1.6-3.6-3.6C-260.8,403.3-260.6,403.1-260.5,402.9z M-254.8,399.4c-0.3-0.2-0.6-0.3-0.8-0.5  c-0.2-0.1-0.3-0.3-0.4-0.5c0-0.1-0.1-0.3-0.1-0.4c0-0.6,3.7-3.9,4.2-3.9c0.1,0,0.1,0,0.2,0c1.9,0.1,3.4,1.6,3.4,3.6  s-1.6,3.6-3.6,3.6c-0.2,0-0.4-0.2-0.6-0.3c-0.4-0.2-0.7-0.5-1-0.7C-254,400-254.4,399.7-254.8,399.4z M-257,418.3  c-5.3,0-10-2-13.7-5.1l9-9.1c0.3,2.2,2.2,4,4.5,4c2.5,0,4.6-2.1,4.6-4.6c0-0.5-0.1-0.9-0.2-1.3c0.3,0,0.5,0.1,0.8,0.1  c2.5,0,4.6-2.1,4.6-4.6c0-2.1-1.5-3.9-3.5-4.4l9.7-9.7c3.2,3.7,5.2,8.5,5.2,13.8C-236,408.9-245.4,418.3-257,418.3z"></path>
                            </svg>
                            Gifts
                        </Link>
                    </div>
                    {this.renderContent()}
                </CardBody>
            </Card>
        )
    }
}

const mapStateToProps = ({ Gifts }) => ({
    Gifts
})

export default connect(mapStateToProps)(Gifts)
