import React, { Fragment } from 'react'

const App = ({ children }) => {
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

export default App


// import React, { Component, Fragment } from 'react';
// import { Collapse, CardBody, Card, Container } from 'reactstrap';
// import { forEach } from "lodash"
// import './App.css';


// const testData = [
//   {
//     title: 'Return Policy',
//     paragraph: (
//       <Fragment>
//         <p>At Neiman Marcus, we respect and value every customer. Because your trust is important to us, we want you to be completely happy with every purchase. If you are not satisfied, for any reason, we are glad to accept returns of saleable merchandise for a full refund or exchange. Refunds will be credited to the original form of payment. The following rules apply:</p>
//         <ul>
//           <li>Returns are accepted within 30 days of receipt.</li>
//           <li>Returned merchandise should be in the same condition as when you received it, unworn, undamaged, saleable, with original tags and packaging (if applicable).</li>
//           <li>Altered apparel, special orders, perishable or personalized/monogrammed items, and items identified as "final sale" cannot be returned.</li>
//           <li>We are happy to honor requests for adjustment if your merchandise was purchased at regular price and then reduced within 10 days of purchase. </li>
//           <li>Neiman Marcus reserves the right, at its sole discretion, to determine if returned merchandise is in saleable condition.</li>
//         </ul>
//         <h3>Returning By Mail</h3>
//         <p>
//           <a rel="noopener noreferrer" href="https://returns.narvar.com/neimanmarcus/returns" target="_blank">
//             Click here to start your return
//             </a>using the order number. Eligible merchandise may be returned FREE if received within 15 days of the delivery date; above exclusions apply.
//         </p>
//         <p>A return fee of $9.95 will apply for: all clearance items, all items returned after 15 days of delivery, and items marked as "Return Fees Apply."</p>
//         <p>If you don't have an order number, please call <a href="tel:18888884757">1-888-888-4757</a> for assistance. </p>
//         <p>Ship eligible returns prepaid and insured, and include a copy of the receipt so your credit can be easily processed to: Sales Division, 123 Customer Way, Irving, TX 75039. </p>
//         <p>Neiman Marcus store purchases may be returned by mail to the store in which they were purchased.</p>
//         <h4>Gift Returns By Mail</h4>
//         <p><a rel="noopener noreferrer" href="https://returns.narvar.com/neimanmarcus/returns" target="_blank">Click here to start your gift return</a> using the order number. A Neiman Marcus Group Merchandise Credit Gift Card will be issued to the recipient for the amount of the returned merchandise. The card can be used for store, online, and catalog purchases from Neiman Marcus, Horchow, Last Call and Bergdorf Goodman. For gifts valued at more than $2,000.00, the recipient will receive a check instead of a gift card in compliance with federal law. </p>

//         <p>If you don't have an order number, please call <a href="tel:18888884757">1-888-888-4757</a> for assistance. </p>

//         <p>Ship eligible returns prepaid and insured, and include a copy of the receipt so your credit can be easily processed to: Sales Division, 123 Customer Way, Irving, TX 75039</p>

//         <p>Neiman Marcus store purchases may be returned by mail to the store in which they were purchased.</p>

//         <h3>Returning In Store</h3>
//         <p><a rel="noopener noreferrer" href="https://returns.narvar.com/neimanmarcus/returns" target="_blank">Click here to start your return</a> and print your return slip using the order number. You will need this return slip to return items in store. Eligible items may be returned to a Neiman Marcus store for credit within 30 days of the delivery date. Bring the merchandise and either your return slip (if purchase was made online) or receipt (from in-store purchases) to any store sales associate.</p>

//         <p>Neiman Marcus stores are unable to process returns for items purchased at Bergdorf Goodman, Last Call and Horchow stores, online or via catalog.</p>

//         <h4>Gift Returns In Store</h4>

//         <p><a rel="noopener noreferrer" href="https://returns.narvar.com/neimanmarcus/returns" target="_blank">Click here to start your gift return</a> and print your return slip using the order number. You will need this return slip to return items in store. Bring the merchandise and either your return slip (if purchase was made online) or receipt (from in-store purchases) to any store sales associate. A Neiman Marcus Group Merchandise Credit Gift Card will be issued to the recipient for the amount of the returned merchandise. The card can be used for store, online, and catalog purchases from Neiman Marcus, Horchow, Last Call and Bergdorf Goodman. For gifts valued at more than $2,000.00, the recipient will receive a check instead of a gift card in compliance with federal law.</p>

//         <p>Neiman Marcus stores are unable to process returns for items purchased at Bergdorf Goodman, Last Call and Horchow stores, online or via catalog.</p>

//         <h3>Returning International Merchandise </h3>

//         <p>For complete return policy details, please visit <a rel="noopener noreferrer" href="/globalreturns">www.neimanmarcus.com/globalreturns</a>.</p>

//         <h3>Returning Large/Heavy Merchandise</h3>

//         <p>A pickup and/or restock fee may apply.</p>

//         <h3>Other Items</h3>

//         <p>Due to air transportation restrictions and regulations, certain items considered hazardous materials are restricted to ground-only transport. These include aerosols and alcohol-based products (e.g., pressurized spray containers, hairspray, nail polish remover, etc.).</p>

//         <p class="updated">Last Updated February 1, 2020</p>

//         <p data-expander-close="returnpolicy"><a rel="noopener noreferrer" href="" class="button button-small">Close</a></p>
//       </Fragment>
//     )
//   },
//   {
//     title: 'ShopRunner', paragraph: (
//       <Fragment>
//         <p>ShopRunner is a convenient shopping option available on our site that offers its members free 2-day shipping and free return shipping on select items.</p>
//         <p>Returns are accepted within 30 days of receipt. Return charges will be removed after your items are processed. A fee will not apply to ShopRunner member returns and does not require contacting Customer Care. Altered apparel, special orders, perishable, personalized, and "final sale" items cannot be returned.</p>
//         <p class="updated">Last Updated September 27, 2019</p>
//         <p data-expander-close="shoprunner">
//           <a href="" class="button button-small">Close</a></p>
//       </Fragment >
//     )
//   },

// ];

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.toggle = this.toggle.bind(this);
//     this.state = { isOpen: false, collapseBanner: "", data: {} };

//   }

//   componentDidMount() {
//     // call prepare data after api call
//     this.setState({ data: testData })
//   }

//   toggle(e) {
//     this.setState({ collapseBanner: e });
//     if (this.state.collapseBanner === e) {
//       this.setState(prevState => ({
//         collapseBanner: !prevState.collapseBanner
//       }));
//     }
//     if (this.state.collapseBanner === "") {
//       this.setState({ isOpen: !this.state.isOpen });
//     }

//   }

//   renderBanner() {
//     let result = [];
//     forEach(this.state.data, (item, index) => {
//       result.push(
//         <div className={this.state.isOpen && (this.state.collapseBanner === index) ? "active accordion_wraper" : "accordion_wraper"} key={index}>
//           <h2 className={this.state.isOpen && (this.state.collapseBanner === index) ? "active" : ""} color="primary" onClick={() => this.toggle(index)} style={{ marginTop: '1rem', marginBottom: '1rem' }} >{item.title}</h2>
//           <Collapse isOpen={this.state.isOpen && (this.state.collapseBanner === index)}>
//             <Card>
//               <CardBody>
//                 {item.paragraph}
//               </CardBody>
//             </Card>
//           </Collapse>
//         </div>
//       )
//     })
//     return (
//       <Card>
//         {result}
//       </Card>
//     );
//   }
//   render() {
//     return (
//       <Container>
//         <div className={"doc-example"}>
//           <div className={"assistance-content-title"}>
//             <span className={"assistCatIconText"}> Returns &amp; Exchanges</span>
//           </div>
//           {this.renderBanner()}
//         </div>
//       </Container>

//     );
//   }
// }

// export default App;