import { combineReducers } from "redux";
import RAndEReducers from "./RAndEReducers";
import SidebarReducers from "./SidebarReducers";


export default combineReducers({
    ReturnAndExchange: RAndEReducers,
    Sidebar: SidebarReducers
});