import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, NavLink } from 'reactstrap';


class Sidebar extends Component {

    render() {
        return (
            <ListGroup>
                {
                    this.props.Sidebar.map(({ label, name, icon, ...rest }) => (
                        <NavLink tag="a" href="#" key={name} {...rest}>
                            {icon}{label}
                        </NavLink>
                    ))
                }
            </ListGroup >
        );
    }

}

const mapStateToProps = ({ Sidebar }) => {
    return {
        Sidebar
    }
}

export default connect(mapStateToProps)(Sidebar)