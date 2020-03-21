import React, { Fragment } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import ReturnAndExchange from './ReturnAndExchange/ReturnAndExchange';
import Cardwraper from './Card'

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
                    </Switch>
                </Col>
            </Container>
        </Fragment>
    )
}

export default AssistanceWrapper
