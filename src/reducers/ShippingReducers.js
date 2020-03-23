import React, { Fragment } from 'react';

export default () => {
    return [
        {
            id: 1,
            title: "Shipping Information",
            displayIcon: true,
            content: <Fragment>
                <table>
                    <tbody>
                        <tr>
                            <th><strong>Shipping Method</strong></th>
                            <th><strong>Shipping Charge</strong></th>
                            <th><strong>Order By</strong></th>
                            <th><strong>Estimated Delivery</strong></th>
                        </tr>
                        <tr>
                            <td>FREE Standard*</td>
                            <td>$0</td>
                            <td>12:00 noon CT</td>
                            <td>3 to 5 business days after shipping.</td>
                        </tr>
                        <tr>
                            <td>Second Business Day**</td>
                            <td>$15</td>
                            <td>12:00 noon CT</td>
                            <td>2 to 3 business days after shipping.</td>
                        </tr>
                        <tr>
                            <td>Next Business Day**</td>
                            <td>$25</td>
                            <td>12:00 noon CT</td>
                            <td>1 to 2 business days after shipping.</td>
                        </tr>
                        <tr>
                            <td>Same Day***</td>
                            <td>$20</td>
                            <td>12:00 noon CT</td>
                            <td>Same day</td>
                        </tr>
                    </tbody>
                </table>
                <p>Shipping is the charge for catalog and internet order processing, item selection, packaging, transport, and handling. Special requests, including specification of carrier and/or future delivery dates, may include additional charges. Delivery times are not guaranteed, notwithstanding additional charges, but are our best approximation and will vary with specific requests, such as gift box, gift wrap, and monogramming. Shipments and deliveries occur only on weekdays. Shipping is subject to change and will be determined at time of order.</p>
                <p>* Shipping charges and times may vary by merchandise.</p>
                <p>** Orders placed after 12:00 noon (CT) Friday will be processed Monday. Shipping charges and times may vary by merchandise. A signature may be required, and there may be additional charges if more than one delivery attempt is required. This service is not available for some zip codes.</p>
                <p>*** Available Monday through Friday only for select zip codes and eligible in-stock merchandise. Holidays are excluded. If there is an unexpected delay, we will make every effort to deliver the order the next business day. A signature and phone number are required. Not available for PO boxes or APO addresses.</p>
                <p className="updated">Last Updated October 27, 2016</p>
                <p data-expander-close="shippinginformation"><a href="" className="button button-small">Close</a></p>
            </Fragment>
        },
        {
            id: 2,
            title: "Additional Shipping Information",
            displayIcon: true,
            content: <Fragment>
                <ul className="list-indent">
                    <li>Items ordered together may be shipped separately. Total shipping charges will be divided between all shipments but not necessarily evenly</li>
                    <li>For orders that require more than one package, the additional charge for second business day and next business day deliveries will be per package.</li>
                    <li>Returns may affect final shipping charges. Shipping charges are not refundable unless merchandise is damaged or defective.</li>
                    <li>For orders of multiple items from different catalogs, shipping charges will be based on the information in the most current catalog.</li>
                    <li>Shipping charges may vary for catalog orders and online orders.</li>
                    <li>Items requiring special delivery have shipping charges indicated on the product page. For those items only, the amount displayed is the total shipping charge.</li>
                    <li>In compliance with U.S. Department of Transportation rules, restricted items such as fragrances must be delivered via standard shipping and cannot be shipped to APO, FPO &amp; DPO addresses.</li>
                </ul>
                <p className="updated">Last Updated September 21, 2016</p>
                <p data-expander-close="additionalinformation"><a href="" className="button button-small">Close</a></p>
            </Fragment>
        },
        {
            id: 3,
            title: "U.S. Territories",
            displayIcon: true,
            content: <Fragment>
                <p>There is no additional charge for standard, second business day, and next business day shipping to Puerto Rico, Guam and other U.S. Territories. Your order should arrive 7 to 10 business days after shipping if ordered by 12:00 noon (CT).	</p>
                <p className="updated">Last Updated October 27, 2016</p>
                <p></p>
                <p data-expander-close="noncontiguous"><a href="" className="button button-small">Close</a></p>
            </Fragment>
        },
        {
            id: 4,
            title: "Drop Ship Items",
            displayIcon: true,
            content: <Fragment>
                <p>Drop ship items are shipped directly from the manufacturer to your door. Second day and next day shipping are not available on these items. These items cannot be delivered to APO, FPO, or P.O. Boxes and cannot be gift-wrapped. Additional time should be allowed for processing the order, and heavy items may take up to 4 to 6 weeks for delivery. Please feel free to contact us if you have any questions regarding when you will receive your order.</p>
                <p className="updated">Last Updated October 27, 2016</p>
                <p data-expander-close="dropship"><a href="" className="button button-small">Close</a></p>
            </Fragment>
        },
        {
            id: 5,
            title: "FedEx Pickup Location",
            displayIcon: true,
            content: <Fragment>
                <p>No need to worry about being home to sign or having packages left on your porch! Ship items at no extra charge to your preferred FedEx Pickup Location, including participating Walgreens and FedEx stores, and pick up at your convenience.</p>
                <p>Select "FedEx Pickup Location" under delivery options while in your shopping bag. Some items such as oversized products and perishables are not eligible for this service. You will receive an email when your items are ready to pick up. Items must be retrieved within five days of delivery, and you must present a valid ID.</p>
                <p className="updated">Last Updated December 4, 2018</p>
                <p data-expander-close="hal"><a href="" className="button button-small">Close</a></p>
            </Fragment>
        },
        {
            id: 6,
            title: "Furniture",
            displayIcon: true,
            content: <Fragment>
                <p>Furniture items are shipped directly from the manufacturer to your door. Second business day and next business day shipping are not available. These items cannot be delivered to APO, FPO, or P.O. Boxes.  Please allow up to 4 to 6 weeks for delivery. </p>
                <p>Before placing a furniture order, measure doorways, stairways and designated location to be sure merchandise will fit. </p>
                <p>Most large pieces, determined by dimensions and weight, as well as certain items that require extensive assembly or setup, are delivered using our *White Glove service. Various other items will be delivered using our *Inside Entryway  service.</p>
                <p> <i><b>What is White Glove service?</b></i> The Delivery Company brings the item into the room or area of choice (including up or down stairs), uncrates it, assembles it (if necessary), positions it, and removes all shipping materials.  If you have any questions about White Glove Service, please call 1.800.649.5429. </p>
                <p> <i><b>Is there a charge for White Glove service?</b></i> White Glove service is included in the cost of shipping. </p>
                <p> <i><b>How is White Glove service scheduled?</b></i> Our designated Delivery Company for your area will contact you by telephone several days in advance to schedule a specific day and an estimated delivery time. White Glove service is not available on weekends or national holidays. </p>
                <p> <i><b>What is Inside Entryway service?</b></i> The Delivery Company delivers the item in the carton through the door of the residence or the garage door.  The Delivery Company does not unpack, does not assemble, does not place in area or room of choice, and does not remove packing material.  Inside Entryway service is available within the continental U.S. only and is not available on weekends or national holidays. </p>
                <p> <i><b>Is there a charge for Inside Entryway service?</b></i> There is no additional charge for Inside Entryway service. </p>
                <p>*White Glove service is included with delivery for items shipped to AR, AZ, CA, CT, FL, GA, IA, IL, IN, KS, KY, MA, MD, ME, MI, MN, MO, MS, MT, NC, ND, NE, NH, NJ, NM, NV, NY, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VA, VT, WA, WI, WV, WY and the District of Columbia.</p>
                <p>*White Glove service is available only in certain zip codes in Denver, CO and New Orleans, LA. For other zip codes/cities in Colorado and Louisiana, assembly arrangements and expenses are the responsibility of the customer. The Delivery Company will provide details when scheduling delivery.</p>
                <p>*White Glove service is not available for items shipped to AL, DE, or ID.  Inside Entryway service is available in these states.</p>
                <p>Furniture and all other White Glove and Inside Entryway items are restricted to the continental U.S. No deliveries to Alaska or Hawaii. </p>
                <h4>Delivery Date &amp; Time</h4>
                <ul className="list-indent">
                    <li>The Delivery Company will contact you to arrange a date and time once the merchandise is ready to be delivered. If you are unable to keep your scheduled appointment, you will be charged an additional rescheduling fee.</li>
                    <li>Rush deliveries cannot be requested.</li>
                    <li>Deliveries are made Monday through Friday 8am - 5pm local time.</li>
                    <li>An adult at least 18 years of age must be present to accept and sign for the delivery.</li>
                    <li>Failure to accept delivery 30 days after initial contact by Delivery Company may result in a storage fee and/or cancellation.</li>
                    <li>Neiman Marcus partners with our Delivery Companies to ensure the merchandise chosen is delivered with the utmost care. Based on size and/or weight, some of our partners will have a one or two man team. Please click on the Important Delivery Instructions on your Order or Shipping Summary email for delivery details.</li>
                    <li>One Person Delivery - Brings the item into the ground level room or area of choice, uncrates it, positions it and removes all shipping materials They do not move existing furniture or attach any mirrors, pictures, etc. to walls.&nbsp;</li>
                    <li>Two Person Delivery - Brings the item into the room or area of choice (including up or down one flight of stairs ), uncrates it, positions it assembles it (if necessary) and removes all shipping materials. They do not move existing furniture or attach any mirrors, pictures, etc. to walls.&nbsp;</li>
                    <li>Please advise the delivery company of any of the following:</li>
                    <li>Locations: If you are in a remote and/or secluded area or any unusual site circumstances such as entry other than front door.</li>
                    <li>Stairs: How many flights/floors of stairs, spiral staircase, winding narrow, steep, sharp angles, skinny steps, banisters, railings etc.</li>
                    <li>Doorways: Size, angles, or obscure.</li>
                    <li>If the delivery is to a multi-story building, please confirm if there is an elevator large enough to accommodate the item.</li>
                </ul>
                <h4>Customer Preparation</h4>
                <p>We want your delivery to be smooth and uneventful. Please be prepared to make the following arrangements:</p>
                <ul className="list-indent">
                    <li>Clear a pathway and the area where you intend to place your merchandise.</li>
                    <li>Ensure flooring is protected.</li>
                    <li>The Delivery Company is not responsible for moving or disposing of your current furniture.</li>
                </ul>
                <h4>Other Important Delivery Information</h4>
                <p>The Delivery Company is chosen by the type, weight, and size of merchandise to ensure the utmost care is given to the delivery.
                </p>
                <p>Certain large pieces such as wall units and entertainment centers may not be delivered above the ground floor.</p>
                <p>We are not responsible for the installation of some large and heavy items, such as fountains, mirrors, or mantels, framed art, or for attaching headboards to walls.</p>
                <p>The Delivery Company may need to conduct a site visit to determine if a delivery with unique circumstances is possible and to determine any additional charges.</p>
                <p>Additional charges may be incurred for deliveries that require additional manpower, special time requests, or any stair carry above the second floor. Please advise the Delivery Company as noted in the Delivery Date &amp; Time section above.</p>
                <p>Changes to the shipping address after an order has been shipped may incur an additional charge.</p>
                <p>You may be required to sign a waiver of liability if the carrier determines there is a high level of difficulty with the delivery.</p>
                <p>Certificates of Insurance: If your building requires a certificate of insurance, Neiman Marcus will provide one copy. If more than one certificate copy is required, it will be the responsibility of the customer. Neiman Marcus will not pay for multiple copies.</p>
                <p>Inspect your delivery prior to accepting and signing the delivery documents. All damages or missing parts must be identified upon the date of receipt. Claims at any later date will not be accepted. Please make any necessary notes on the documents provided by the Delivery Company and retain a copy for your records. If the furniture arrives defective, damaged or is damaged in the delivery/setup process, the Delivery Company will re-crate and return it at no charge. If it is returned for another reason, a pickup and/or restock fee may apply.</p>
                <p>We recommend a licensed plumber or electrician when applicable.</p>
                <p>Neiman Marcus merchandise is packaged for domestic sale only and is not intended or packaged for export. NMG is not responsible for any claims, including damaged merchandise, subsequent to re-shipment from the original delivery location by any carrier, freight forwarder, or other third party.</p>
                <p>The Delivery Company does not provide storage services.</p>
                <p>In order to protect all parties, we reserve the right to refuse delivery of said merchandise if it is deemed there may be inadequate preparation.</p>
                <p className="updated">Last Updated December 31, 2018</p>
                <p data-expander-close="furniture"><a href="" className="button button-small">Close</a></p>
            </Fragment>
        },
        {
            id: 7,
            title: "International Deliveries",
            displayIcon: true,
            content: <Fragment>
                <p> A base shipping charge will be quoted at the time of order placement that could be amended at a later date for additional charges in the foreign country. Transit days to the recipient will vary depending upon the destination country. Duties and taxes will be the responsibility of the recipient.</p>
                <p className="updated">Last Updated January 22, 2015</p>
                <p data-expander-close="internationaldeliveries"><a href="" className="button button-small">Close</a></p>
            </Fragment>
        },
        {
            id: 8,
            title: "Perishable Goods",
            displayIcon: true,
            content: <Fragment>
                <p>When ordering, please be prepared to provide each recipient's telephone number(s).</p>
                <p>Most perishable items are shipped directly from our vendors via air within the contiguous U.S. only and cannot be delivered to APO, FPO, or P.O. Boxes.</p>
                <p>These items may incur a shipping charge. The shipping charge for these items are added per item and not calculated on the total dollar amount for all perishable items. Perishables and calculated separately from non-perishable items in your order.</p>
                <table className="data-table">
                    <caption>
                        Shipping charges of Perishable Goods
               <small>Chart Denotes a Dollar Amount Per Item</small>
                    </caption>
                    <tbody>
                        <tr>
                            <td>$25.00 and under</td>
                            <td>$9.00</td>
                        </tr>
                        <tr>
                            <td>$25.01 - $50.00</td>
                            <td>$12.50</td>
                        </tr>
                        <tr>
                            <td>$50.01 - $75.00</td>
                            <td>$15.50</td>
                        </tr>
                        <tr>
                            <td>$75.01 - $100.00</td>
                            <td>$18.00</td>
                        </tr>
                        <tr>
                            <td>$100.01 - $125.00</td>
                            <td>$22.00</td>
                        </tr>
                        <tr>
                            <td>$125.01 - $175.00</td>
                            <td>$26.50</td>
                        </tr>
                        <tr>
                            <td>$175.01 - $250.00</td>
                            <td>$29.00</td>
                        </tr>
                        <tr>
                            <td>$250.01 and over</td>
                            <td>$32.00</td>
                        </tr>
                    </tbody>
                </table>
                <p>Perishables are delivered Tuesday through Friday only; no Saturday, Sunday, Monday, or holiday deliveries. Gift packaging is not available.</p>
                <p>Items arrive in separate boxes and incur separate overnight shipping charges. To ensure product quality, all perishable items (except our complete meals) are packaged individually. Multiple orders of the same item cannot be combined. Our complete meals incur only one shipping charge, making them an exceptional value.</p>
                <p><strong>Any cancellation must be requested at least four (4) days prior to the delivery date.</strong></p>
                <p>Unless noted, most garnishes are not included, but are added as an inspiration for your own presentations.</p>
                <p className="updated">Last Updated January 22, 2015.</p>
                <p data-expander-close="perishablegoods"><a href="" className="button button-small">Close</a></p>
            </Fragment>
        },
        {
            id: 9,
            title: "Price Adjustments",
            displayIcon: true,
            content: <Fragment>
                <h3>Price Match</h3>
                <p>Prices are subject to change. We are happy to honor requests for adjustment if your merchandise was purchased at regular price and then reduced within 10 days of purchase. For questions and adjustments, call <a href="tel:18888884757">1.888.888.4757</a>.</p>
                <h3>Price Errors</h3>
                <p>We work hard to ensure the accuracy of pricing on NeimanMarcus.com, but despite our best efforts, pricing errors may occur:</p>
                <ul className="list-indent">
                    <li>If an item's correct price is lower than our stated price, we will charge you the lower amount when your order is shipped.</li>
                    <li>If an item's correct price is higher than our stated price, we will, at our discretion, contact you for instructions before shipping. If we are unable to contact you after 15 days, we will cancel your order and notify you of such cancellation.</li>
                </ul>
                <p className="updated">Last Updated March 29, 2019</p>
                <p data-expander-close="priceadjustments"><a href="" className="button button-small">Close</a></p>
            </Fragment>
        },
        {
            id: 10,
            title: "Restricted/Hazardous (HAZMAT) Items",
            displayIcon: true,
            content: <Fragment>
                <p>Certain customer commodities are considered hazardous materials, such as aerosols, nail polish, fragrances, and other alcohol-based products; our policy is to ship these items as standard shipping (ground only) to continental U.S. locations and Canada (excludes Alaska and Hawaii), and to prohibit the shipping to international locations, including APO/FPO/DPO addresses, Puerto Rico, Guam, and all other U.S. territories.</p>
                <p className="updated">Last Updated October 27, 2016</p>
                <p data-expander-close="hazmat"><a href="" className="button button-small">Close</a></p>
            </Fragment>
        },
        {
            id: 11,
            title: "Shipping to Post Office Boxes",
            displayIcon: true,
            content: <Fragment>
                <p>Second-day and next-day shipping are not available to post office boxes. All standard deliveries to P.O. Boxes will be shipped via parcel post. Please feel free to contact us if you have any questions regarding when you will receive your order.</p>
                <p className="updated">Last Updated October 27, 2016</p>
                <p data-expander-close="postofficebox"><a href="" className="button button-small">Close</a></p>
            </Fragment>
        },
        {
            id: 12,
            title: "ShopRunner",
            displayIcon: true,
            content: <Fragment>
                <p>ShopRunner is a convenient shopping option available on our site that offers its members free 2-day shipping and free return shipping on select items.</p>
                <p>For orders placed with ShopRunner, please allow two full business days* for the order to arrive after it has been processed. Eligible items will ship free via FedEx 2Day  to ensure delivery in two business days. Any shipment to a PO Box, APO/FPO/DPO or international address is excluded from the ShopRunner program.</p>
                <p>*Orders placed after 12:00 noon (CT) Friday will be processed Monday. Shipping times may vary by merchandise. A signature may be required, and there may be additional charges if more than one delivery attempt is required. This service is not available for some zip codes.</p>
                <p className="updated">Last Updated September 27, 2019</p>
                <p data-expander-close="shoprunner"><a href="" className="button button-small">Close</a></p>
            </Fragment>
        }
    ]
}