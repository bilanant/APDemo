
import React, { Component, Fragment } from 'react';
import './ShippingAndOrder.css';

class ShippingAndOrder extends Component {
  render() {
    return (
      <Fragment>
        <div className="widgetIntro">
          <span>Please provide an order number and email address or phone number to find an order.</span><br />
        </div>
        <div className="widgetShippingForm">
          <form method="post" action="?_DARGS=/page_rwd/assistance/assistanceHomeBody.jsp.return_order_lookup#">
            <input name="_dyncharset" type="hidden" value="ISO-8859-1" />
            <input name="_dynSessConf" type="hidden" value="5896882477143988613" />
            <table className="table-form rec-table-form" role="presentation">
              <tbody>
                <tr>
                  <th scope="row" className="orderNumberAssistance">
                    <label htmlFor="nonmember-order-number">Order Number</label>
                  </th>
                  <td colSpan="5" className="orderNumberAssistance">
                    <input name="Id" id="nonmember-order-number" type="text" />
                    <input name="_D:Id" type="hidden" />
                  </td>
                </tr>
                <tr>
                  <th className="rec-padding-bottom-reset emailAddressAssistance" scope="row">
                    <label htmlFor="nonmember-email-add">Email Address</label>
                  </th>
                  <td colSpan="5" className="rec-padding-bottom-reset emailAddressAssistance">
                    <input autoCorrect="off" name="Email" id="nonmember-email-add" type="text" autoCapitalize="off" />
                    <input name="_D:Email" type="hidden" />
                  </td>
                </tr>
                <tr>
                  <th className="rec-padding-bottom-reset align-center mobile-align-left rec-option-label orLabelAssistance" scope="row">
                    <label htmlFor="input-address-2">OR</label>
                  </th>
                  <td colSpan="5" className=""></td>
                </tr>
                <tr>
                  <th scope="row" className="phoneNumberAssistance">
                    <label htmlFor="nonmember-phone-number">Phone Number</label>
                  </th>
                  <td colSpan="5" className="phoneNumberAssistance">
                    <input name="phoneNumber" id="nonmember-phone-number" type="tel" />
                    <input name="_D:phoneNumber" type="hidden" />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td colSpan="5">
                    <input name="/nm/returnscredit/formhandler/ReturnsCreditFormHandler.overrideUrl" type="hidden" value="/assistance/assistance.jsp?itemId=cat33940737" />
                    <input name="_D:/nm/returnscredit/formhandler/ReturnsCreditFormHandler.overrideUrl" type="hidden" value=" " />
                    <input name="/nm/returnscredit/formhandler/ReturnsCreditFormHandler.guestOrderLookup" type="hidden" value="true" />
                    <input name="_D:/nm/returnscredit/formhandler/ReturnsCreditFormHandler.guestOrderLookup" type="hidden" value=" " />
                    <input name="/nm/returnscredit/formhandler/ReturnsCreditFormHandler.findOrder" id="checkFlag" type="submit" value="Track Order" className="button button-action rec-button-mobile recFindOrder button-wide-mobile" />
                    <input name="_D:/nm/returnscredit/formhandler/ReturnsCreditFormHandler.findOrder" type="hidden" value=" " />
                  </td>
                </tr>
              </tbody>
            </table>
            <input name="_DARGS" type="hidden" value="/page_rwd/assistance/assistanceHomeBody.jsp.return_order_lookup" />
          </form>

        </div>
      </Fragment>
    )
  }
}

export default ShippingAndOrder





