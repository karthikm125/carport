import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import { Provider } from 'react-redux';
import { store } from './store';
import FavoritesPage from './FavoritesPage';
import CarDetails from "./CarDetails";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Login/>}></Route>
      <Route path='/home' element ={<Home/>}></Route>
    </Routes>
</BrowserRouter> */}
    {/* <App /> */}
    <Provider store={store}>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/FavoritesPage' element={<FavoritesPage/>}/>\
        <Route path="/car-details/:carId" element={<CarDetails />} />
      </Routes>
      </BrowserRouter>
     </Provider>
  </React.StrictMode>
);


reportWebVitals();
