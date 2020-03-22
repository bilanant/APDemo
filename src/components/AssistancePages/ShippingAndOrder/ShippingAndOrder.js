
import React, { Component, Fragment } from 'react';
import './ShippingAndOrder.css';

class ShippingAndOrder extends Component {
    render(){
        return (
            <Fragment>
                        
            <div class="widgetIntro">
              <p>Please provide an order number and email address or phone number to find an order.</p><br/>
              </div>
              <div class="widgetShippingForm">
                <form method="post" action="?_DARGS=/page_rwd/assistance/assistanceHomeBody.jsp.return_order_lookup#">
                  <input name="_dyncharset" type="hidden" value="ISO-8859-1"/>
                  <input name="_dynSessConf" type="hidden" value="5896882477143988613"/>
                  <table class="table-form rec-table-form" role="presentation">
                      <tbody>
                      <tr>
                        <th scope="row" class="orderNumberAssistance">
                          <label for="nonmember-order-number">Order Number</label>
                        </th>
                        <td colspan="5" class="orderNumberAssistance">
                          <input name="Id" id="nonmember-order-number" type="text" value=""/>
                          <input name="_D:Id" type="hidden" value=" "/>
                        </td>
                      </tr>
                      <tr>
                      <th class="rec-padding-bottom-reset emailAddressAssistance" scope="row">
                          <label for="nonmember-email-add">Email Address</label>
                        </th>
                        <td colspan="5" class="rec-padding-bottom-reset emailAddressAssistance">
                          <input autocorrect="off" name="Email" id="nonmember-email-add" type="text" value="" autocapitalize="off"/>
                            <input name="_D:Email" type="hidden" value=" "/>
                        </td>
                      </tr>
                      <tr>
                        <th class="rec-padding-bottom-reset align-center mobile-align-left rec-option-label orLabelAssistance" scope="row">
                          <label for="input-address-2">OR</label>
                        </th>
                        <td colspan="5" class=""></td>
                      </tr>
                      <tr>
                        <th scope="row" class="phoneNumberAssistance">
                          <label for="nonmember-phone-number">Phone Number</label>
                        </th>
                        <td colspan="5" class="phoneNumberAssistance">
                          <input name="phoneNumber" id="nonmember-phone-number" type="tel" value=""/>
                          <input name="_D:phoneNumber" type="hidden" value=" "/>
                        </td>
                        </tr>
                    <tr>
                      <td></td>
                    <td colspan="5">
                      <input name="/nm/returnscredit/formhandler/ReturnsCreditFormHandler.overrideUrl" type="hidden" value="/assistance/assistance.jsp?itemId=cat33940737"/>
                        <input name="_D:/nm/returnscredit/formhandler/ReturnsCreditFormHandler.overrideUrl" type="hidden" value=" "/>
                      <input name="/nm/returnscredit/formhandler/ReturnsCreditFormHandler.guestOrderLookup" type="hidden" value="true"/>
                        <input name="_D:/nm/returnscredit/formhandler/ReturnsCreditFormHandler.guestOrderLookup" type="hidden" value=" "/>
                      <input name="/nm/returnscredit/formhandler/ReturnsCreditFormHandler.findOrder" id="checkFlag" type="submit" value="Track Order" class="button button-action rec-button-mobile recFindOrder button-wide-mobile" />
                        <input name="_D:/nm/returnscredit/formhandler/ReturnsCreditFormHandler.findOrder" type="hidden" value=" "/>
                    </td>
                  </tr>
                </tbody>
                  </table>
                <input name="_DARGS" type="hidden" value="/page_rwd/assistance/assistanceHomeBody.jsp.return_order_lookup"/>
                </form>
               
              </div>
            </Fragment>
        )
    }
}

export default ShippingAndOrder





