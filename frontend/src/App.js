import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useState, useEffect, useCallback } from 'react';
import Axios from 'axios';
import Home from './components/home/Home';
// import SignUp from './components/signUp/signUp'
import Login from './components/signIn/signIn';
import Product from './components/product/product';
import AddItem from './components/addItem/addItem';
import { userContext } from './contexts/userContext';
import UploadImage from './components/firebase/img';
import Payment from './components/payment/Payment';
import Admin from './components/admin/admin';
import EditUsers from './components/admin/user';
import CategoryControll from './components/admin/category';
import EditItem from './components/admin/item';
import AllUsers from './components/admin/AllOrder';
import AcceptOrders from './components/admin/acceptOrder';
import CompletedOrders from './components/admin/completedOrder'
import AcceptItem from './components/admin/acceptItems';
import AddOrder from './components/addOrder/addOrder';
import jwt from 'jwt-decode';



function App() {
  let t = localStorage.getItem("auth-token");


  const [token, setToken] = useState(t);
  const [userId, setUserId] = useState(false);
  const [admin, setAdmin] = useState(false);
 
  const loggedRoutes = <Routes>
    <Route exact path='/' element={<Home />} />
    <Route path='/product/:prodId' element={<Product />} />
    <Route path='/addItem' element={<AddItem />} />
    <Route path="*" element={<Navigate to='/' />} />
    <Route path='/UploadImage' element={<UploadImage />} />
    <Route path='/payment' element={<Payment />} />
  </Routes>;
  const adminRoutes = <Routes>
    <Route path='/acceptItems' element={<AcceptItem />} />
    <Route path='/editUsers' element={<EditUsers />} />
    <Route path='/editCategory' element={<CategoryControll />} />
    <Route path='/editItems' element={<EditItem />} />
    <Route path='/acceptItems' element={<AcceptItem />} />
    <Route path='/admin' element={<Admin />} />
    <Route path="*" element={<Navigate to='/admin' />} />
  </Routes>;
  const regroute = <Routes>
    <Route exact path='/' element={<Home />} />
    <Route path='/signIn' element={<Login />} />
    <Route path='/UploadImage' element={<UploadImage />} />
    <Route path='/product/:prodId' element={<Product />} />
    <Route path="*" element={<Navigate to='/signIn' />} />
    <Route path='/AllUsers' element={<AllUsers />} />
    <Route path='/AcceptOrders' element={<AcceptOrders />} />
    <Route path='/CompletedOrders' element={<CompletedOrders />} />
    <Route path='/AddOrder' element={<AddOrder />} />
    
    

    
  </Routes>;
  const [routes, setRoutes] = useState(regroute);

  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setAdmin(null);
  }, []);

  useEffect(() => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
      setToken();
      setRoutes(regroute);
    }
    else if (token) {
      const user = jwt(token);
      console.log("jwt(token)",jwt(token));
      console.log(user.admin);
      console.log("token",token);

       if (user.admin) {
        setAdmin(true);
        setRoutes(adminRoutes);
      }
      else {
        setAdmin(false);
        setRoutes(loggedRoutes);
      }
    }
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const bodyParameters = {
      key: "value"
    };
    console.log(token);
    Axios.post('/isValid', bodyParameters, config).then(result => {
      console.log(result);
      if (result.data.token === false) {
        localStorage.setItem("auth-token", "");
        setToken(false);
      }

    })
  }, []);

  return (
    <userContext.Provider value={
      {
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout
      }
    }>


      {routes}

    </userContext.Provider>
  );
}

export default App;


