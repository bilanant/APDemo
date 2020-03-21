import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';


class Sidebar extends Component {

    render() {
        return (
            <ListGroup>
                {
                    this.props.Sidebar.map(({ label, id, link, name, icon, card }) => (
                        <Link className="nav-link" to={link} key={id} >
                            {card ? icon : ''}{label}
                        </Link>
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