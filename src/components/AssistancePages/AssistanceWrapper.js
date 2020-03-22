import React, { Fragment } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Cardwraper from './Card';
import ReturnAndExchange from './ReturnAndExchange/ReturnAndExchange';
import ShopWithUs from './ShopWithUs/ShopWithUs';
import Gifts from './Gifts/Gifts';
import Global from './Global/Global';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';

const AssistanceWrapper = () => {
    return (
        <Fragment>
            <Container className="d-flex main-container" >
                <Col className="col-auto col-md-3 left-wraper">
                    <Sidebar />
                </Col>
                <Col className="col right-wraper">
                    <Switch>
                        <Route exact path="/ap">
                            <Row>
                                <Cardwraper />
                            </Row>
                        </Route>
                        <Route path="/ap/returns" >
                            <ReturnAndExchange />
                        </Route>
                        <Route path="/ap/shop" >
                            <ShopWithUs />
                        </Route>
                        <Route path="/ap/gifts" >
                            <Gifts />
                        </Route>
                        <Route path="/ap/global" >
                            <Global />
                        </Route>
                        <Route path="/ap/privacy" >
                            <PrivacyPolicy />
                        </Route>
                    </Switch>
                </Col>
            </Container>
        </Fragment>
    )
}

export default AssistanceWrapper
