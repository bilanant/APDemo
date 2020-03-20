import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import Sidebar from './Sidebar';
import ReturnAndExchange from './ReturnAndExchange/ReturnAndExchange';

const AssistanceWrapper = () => {
    return (
        <Fragment>
            <Container className="d-flex">
                <Sidebar />
                <ReturnAndExchange />
            </Container>
        </Fragment>
    )
}

export default AssistanceWrapper
