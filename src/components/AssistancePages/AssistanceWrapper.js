import React, { Fragment } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Switch, Route, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import RootCard from './RootCard';
import RootAccordian from './RootAccordian/RootAccordian';

const AssistanceWrapper = (props) => {
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
                                <RootCard />
                            </Row>
                        </Route>
                        <Route path="/ap/:id" component={Category} />

                    </Switch>
                </Col>
            </Container>
        </Fragment>
    )
}

const Category = () => {
    let { id } = useParams();
    return <RootAccordian page={id} />
}

export default AssistanceWrapper
