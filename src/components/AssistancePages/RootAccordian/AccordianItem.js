import React from 'react';
import { ListGroupItem, Collapse } from 'reactstrap';

import './RootAccordian.css'


class AccordianItem extends React.Component {
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
            <ListGroupItem className={'p-0'}>

                <div className={!element.displayIcon ? "accordion_wrapper_hidden" : (this.props.isOpen ? "active accordion_wraper" : "accordion_wraper")}>
                    <h2
                        className={this.props.isOpen ? "active" : ""}
                        onClick={this.toggle}
                    >
                        {element.link !== undefined && !element.displayIcon ? (<a href={element.link}>{element.title}</a>) : element.title}
                    </h2>
                    <Collapse isOpen={this.props.isOpen}>{element.content}</Collapse>
                </div>
            </ListGroupItem>
        );
    }
}

export default AccordianItem