import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import Orders from './components/Orders';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<>
          <Header />
          <Home />
        </>
        } />
        <Route path='/payment' element={<>

          <Payment />
        </>} />
        <Route path='/login' element={<Login />} />
        <Route path='/orders' element={<>
          <Header />
          <Orders />
        </>} />
        <Route path='/checkout'
          element={<>
            <Header />
            <Checkout />
          </>
          } />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
