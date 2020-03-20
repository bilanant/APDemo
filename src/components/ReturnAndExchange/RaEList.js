import React from 'react';
import { ListGroupItem, Collapse } from 'reactstrap';

import './ReturnAndExchange.css'


class RaEList extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.props.toggle(this.props.element);
    }

    render() {
        const element = this.props.element;
        return (
            <ListGroupItem>
                <div className={this.props.isOpen ? "active accordion_wraper" : "accordion_wraper"}>
                    <h2
                        className={this.props.isOpen ? "active" : ""}
                        onClick={this.toggle}
                        style={{ marginTop: '1rem', marginBottom: '1rem' }} >
                        {element.title}
                    </h2>
                    <Collapse isOpen={this.props.isOpen}>{element.content}</Collapse>
                </div>
            </ListGroupItem>
        );
    }
}

export default RaEList