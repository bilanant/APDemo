import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import Welcome from './components/Welcome';
import AssistanceWrapper from './components/AssistancePages/AssistanceWrapper';

import reducers from "./reducers";

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path='/' exact component={Welcome} />
                <Route path='/ap' component={AssistanceWrapper} />
            </App>
        </BrowserRouter>
    </Provider>
    , document.querySelector("#root"))
