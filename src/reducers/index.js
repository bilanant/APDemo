import { combineReducers } from "redux";
import RAndEReducers from "./RAndEReducers";
import SidebarReducers from "./SidebarReducers";
import SwUReducers from "./SwUReducers";
import GReducers from "./GReducers";
import GlobalReducers from "./GlobalReducers";
import PPReducers from "./PPReducers";
import ShippingReducers from "./ShippingReducers";


export default combineReducers({
    Sidebar: SidebarReducers,
    ReturnAndExchange: RAndEReducers,
    ShopWithUs: SwUReducers,
    Gifts: GReducers,
    Global: GlobalReducers,
    PrivacyPolicy: PPReducers,
    Shipping: ShippingReducers
});