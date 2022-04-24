import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import Expenses from './pages/Expenses';
import Invoices from './pages/Invoices';
import Auth from './pages/Auth';
import Login from './pages/Login';
import Home from './pages/Home';
import { HashRouter } from 'react-router-dom';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Category from './pages/Category';
import Profile from './components/Profile';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="catalog" element={<Catalog />}>
            <Route path=":category" element={<Category />} />
            <Route path=":category/:product" element={<ProductDetail />} />
          </Route>
          {/* <Redirect from="catalog" to="/catalog/restaurants" /> */}
          <Route path="profile" element={<Profile />} />
          <Route index element={<Home />} />
        </Route>
        <Route path="auth" element={<Auth />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
