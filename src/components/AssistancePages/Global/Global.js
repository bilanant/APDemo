import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CardBody, Card } from 'reactstrap';

import GlobalList from './GlobalList';

class Global extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {};
    }


    toggle(element) {
        this.setState({ collapse: this.state.collapse === element ? null : element });
    }

    renderContent() {
        return this.props.Global.map((element) => {
            return (
                <GlobalList key={element.id}
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
                        <Link to="/ap/global" id="3" className="nav-link">
                            <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-281 373.1 48 47.9" className="svg assistCatIcon tag-svg assistCatIcon">
                                <g>
                                    <g>
                                        <g>
                                            <path id="SVGID_1_" d="M-257,421.1C-257,421.1-257.1,421.1-257,421.1C-257.1,421.1-257.1,421.1-257,421.1     C-257.1,421.1-257.1,421.1-257,421.1c-13.3,0-24-10.8-24-24s10.7-24,23.9-24l0,0l0,0l0,0c13.3,0,24,10.7,24,24     C-233,410.4-243.8,421.1-257,421.1L-257,421.1L-257,421.1z M-258,408.7c-2.4,0.1-4.7,0.4-6.9,0.9c1.7,5.3,4.3,8.8,6.9,9.5V408.7     L-258,408.7L-258,408.7z M-256.1,408.7v10.4c2.6-0.7,5.2-4.2,6.9-9.5C-251.4,409-253.7,408.7-256.1,408.7L-256.1,408.7     L-256.1,408.7z M-247.3,410.1c-1.1,3.6-2.7,6.6-4.6,8.5c4.1-1,7.7-3.1,10.6-6C-243.2,411.6-245.2,410.7-247.3,410.1L-247.3,410.1     L-247.3,410.1z M-262.3,418.6c-1.9-1.9-3.4-4.9-4.5-8.5c-2.1,0.6-4.1,1.5-6,2.5C-269.9,415.5-266.3,417.6-262.3,418.6     L-262.3,418.6L-262.3,418.6z M-279.1,398.1c0.2,4.9,2.1,9.5,5,13c2.1-1.2,4.4-2.1,6.8-2.9c-0.8-3.1-1.2-6.5-1.3-10.2h-10.5V398.1     L-279.1,398.1z M-245.5,398.1c-0.1,3.7-0.5,7.1-1.3,10.2c2.4,0.7,4.7,1.7,6.8,2.9c2.9-3.6,4.8-8.1,5-13h-10.5V398.1L-245.5,398.1     z M-266.7,398.1c0.1,3.6,0.5,6.8,1.2,9.7c2.4-0.6,4.9-0.9,7.5-1v-8.7H-266.7L-266.7,398.1L-266.7,398.1z M-256.1,398.1v8.7     c2.5,0.1,5,0.4,7.4,1c0.7-2.8,1.2-6.1,1.2-9.7H-256.1L-256.1,398.1L-256.1,398.1z M-235,396.1c-0.2-4.9-2.1-9.5-5-13     c-2.2,1.2-4.4,2.2-6.8,2.9c0.8,3.1,1.2,6.5,1.3,10.2h10.5V396.1L-235,396.1z M-247.4,396.1c-0.1-3.6-0.5-6.8-1.2-9.7     c-2.4,0.6-4.9,0.9-7.4,1v8.7H-247.4L-247.4,396.1L-247.4,396.1z M-265.5,386.5c-0.7,2.8-1.2,6.1-1.2,9.7h8.7v-8.7     C-260.6,387.4-263.1,387.1-265.5,386.5L-265.5,386.5L-265.5,386.5z M-274.1,383.1c-2.9,3.6-4.8,8.1-5,13h10.5     c0.1-3.7,0.5-7.1,1.3-10.2C-269.7,385.2-272,384.3-274.1,383.1L-274.1,383.1L-274.1,383.1z M-256.1,375.2v10.4     c2.4-0.1,4.7-0.4,6.9-0.9C-250.9,379.3-253.5,375.9-256.1,375.2L-256.1,375.2L-256.1,375.2z M-258,375.2     c-2.6,0.7-5.3,4.1-6.9,9.5c2.2,0.5,4.6,0.9,6.9,0.9V375.2L-258,375.2L-258,375.2z M-251.9,375.6c1.9,1.9,3.4,4.9,4.6,8.5     c2.1-0.6,4.1-1.5,6-2.5C-244.2,378.7-247.8,376.6-251.9,375.6L-251.9,375.6L-251.9,375.6z M-262.3,375.6c-4.1,1-7.7,3.1-10.5,6     c1.9,1,3.9,1.8,6,2.5C-265.7,380.5-264.1,377.6-262.3,375.6L-262.3,375.6L-262.3,375.6z"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            Global
                        </Link>
                    </div>
                    {this.renderContent()}
                </CardBody>
            </Card>
        )
    }
}

const mapStateToProps = ({ Global }) => ({
    Global
})

export default connect(mapStateToProps)(Global)
