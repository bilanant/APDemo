import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

// import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar'
import Accordiancontent from './component/Accordiancontent';
import Cardwraper from './component/Card'

// import Test from "./test";

const testData = [

  {
    title: 'headding1', paragraph: `'Anim pariatur cliche reprehenderit,
enim eiusmod high life accusamus terry richardson ad squid. Nihil
anim keffiyeh helvetica, craft beer labore wes anderson cred
nesciunt sapiente ea proident.'`},

  {
    title: 'headding1', paragraph: `'Anim pariatur cliche reprehenderit,
enim eiusmod high life accusamus terry richardson ad squid. Nihil
anim keffiyeh helvetica, craft beer labore wes anderson cred
nesciunt sapiente ea proident.'`},

  {
    title: 'headding1', paragraph: `'Anim pariatur cliche reprehenderit,
enim eiusmod high life accusamus terry richardson ad squid. Nihil
anim keffiyeh helvetica, craft beer labore wes anderson cred
nesciunt sapiente ea proident.'`},

  {
    title: 'headding1', paragraph: `'Anim pariatur cliche reprehenderit,
enim eiusmod high life accusamus terry richardson ad squid. Nihil
anim keffiyeh helvetica, craft beer labore wes anderson cred
nesciunt sapiente ea proident.'`}

];


const items = [
  { name: 'Shipping & Order Status', label: 'Shipping & Order Status', icon: <img src="https://www.neimanmarcus.com/category/cat33940737/caticon.svg" className={'img-responsive'} /> },
  {
    name: 'My Account', label: 'My Account', icon: <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-281 372.4 48.5 48.6" class="svg assistCatIcon tag-svg">
      <path d="M-256.8,372.7c-13.3,0-24,10.7-24,24s10.7,24,24,24c13.3,0,24-10.7,24-24C-232.8,383.5-243.4,372.7-256.8,372.7  L-256.8,372.7z M-239.8,410.8c-2.2-0.9-7.4-2.7-10.6-3.7c-0.3-0.1-0.3-0.1-0.3-1.2c0-0.9,0.4-1.9,0.8-2.7c0.4-0.9,0.9-2.3,1.1-3.6  c0.5-0.6,1.1-1.7,1.6-3.8c0.4-1.9,0.2-2.6,0-3.2c0-0.1-0.1-0.1-0.1-0.2c-0.1-0.4,0-2.7,0.4-4.5c0.2-1.2-0.1-3.8-1.7-5.9  c-1.1-1.3-3.1-3-6.8-3.2h-2c-3.6,0.2-5.6,1.9-6.7,3.2c-1.7,2.1-1.9,4.7-1.7,5.9c0.3,1.8,0.4,4,0.4,4.5c0,0.1,0,0.1-0.1,0.2  c-0.2,0.6-0.4,1.3,0,3.2c0.4,2.1,1.1,3.2,1.6,3.8c0.2,1.3,0.7,2.8,1.1,3.6c0.3,0.6,0.4,1.5,0.4,2.7c0,1.1,0,1.2-0.3,1.2  c-3.3,1-8.6,2.9-10.6,3.7c-3.2-3.8-5.2-8.8-5.2-14.2c0-12.1,9.9-22,22-22s22,9.9,22,22C-234.8,402.1-236.7,406.9-239.8,410.8  L-239.8,410.8z"></path>
    </svg>
  },
  {
    name: 'Returns & Exchanges', label: 'Returns & Exchanges', icon: <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 612 792" class="svg assistCatIcon tag-svg">
      <path d="M162,459.9h39c26.6-149.6,157.4-265,316.4-265c6.3,0,12.4,0,18.7,0L466,263.4c-7.8,7.8-7.8,18.7,0,26.6  c3.1,3.1,7.8,6.3,13.9,6.3c6.1,0,9.4-1.5,13.9-6.3l112.3-115.4L493.9,59.2c-7.8-7.8-18.7-7.8-26.6,0s-7.8,18.7,0,26.6l68.6,68.6  c-6.3,0-12.4,0-17.2,0C336.4,157.4,186.8,288.5,162,459.9z"></path>
      <path d="M536.1,611.2H43.3V232.3h152.9l39-37.4l-1.5-1.5H43.3c-20.3,0-37.4,17.2-37.4,37.4v378.9c0,20.3,17.2,37.4,37.4,37.4h492.8  c20.3,0,37.4-17.2,37.4-37.4V313.5l-37.4,35.9V611.2z"></path>
    </svg>
  },
]

class App extends Component {


  render() {
    return (
      <React.Fragment>
        <Header />
        <Container fluid={true}>
          <Container className={'main-container'}>
            <Row>
              <Col xs="12" sm="4" md="3">
                <Sidebar items={items} />
              </Col>
              <Col xs="12" sm="8" md="9">
                <Row>
                  <Cardwraper />
                  <Cardwraper />
                  <Cardwraper />
                  <Cardwraper />
                </Row>
                <Row>
                  <Accordiancontent data={testData} />
                </Row>
              </Col>
            </Row>
          </Container>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
