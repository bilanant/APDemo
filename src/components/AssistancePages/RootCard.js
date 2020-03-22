import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import ShippingAndOrder from './ShippingAndOrder/ShippingAndOrder'

class RootCard extends Component {
  render() {
    return (
      <Fragment>
        {
          this.props.Sidebar.map(({ label, id, link, name, icon, card }) => (
            card &&
            <div className={'col-12 col-md-6 mb-4'} key={id}>
              <Card className={'widgetContainer'}>
                <CardBody>
                  <CardTitle className={'widgetTitle'}>
                    <Link to={link}>
                      {card ? icon : ''}{label}
                    </Link>
                  </CardTitle>

                  <CardText>
                    {
                      link === '/ap/shipping' ?  <ShippingAndOrder/> : <p>Please provide an order number and email address or phone number to find an order.</p>
                    }
                  </CardText>

                  <Link to={link} className={'btn-link'}>
                    View All
                  </Link>
                </CardBody>
              </Card>
            </div>
          ))
        }
      </Fragment>

    );
  }

}

const mapStateToProps = ({ Sidebar }) => {
  return {
    Sidebar
  }
}

export default connect(mapStateToProps)(RootCard)