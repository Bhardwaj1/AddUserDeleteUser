import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import NavBar from './componenets/navBar';
import AddUser from './componenets/addUser';

import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App />
    <NavBar />
    <AddUser />
    </Provider>
);



