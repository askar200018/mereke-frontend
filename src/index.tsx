import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store';

import App from './App';
import Expenses from './pages/Expenses';
import Invoices from './pages/Invoices';
import Auth from './pages/Auth';
import Login from './pages/Login';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Category from './pages/Category';
import Favourites from './pages/Favourites';
import Profile from './pages/Profile';
import ScrollToTop from './components/ScrollToTop';
import Bookings from './pages/Bookings';
import Basket from './pages/Basket';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="catalog" element={<Catalog />}>
              <Route path=":category" element={<Category />} />
              <Route path=":category/:product" element={<ProductDetail />} />
            </Route>
            <Route path="products/:productId" element={<ProductDetail />} />
            <Route path="profile" element={<Profile />} />
            <Route path="favourites" element={<Favourites />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="basket" element={<Basket />} />
            <Route index element={<Home />} />
          </Route>
          <Route path="auth" element={<Auth />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
