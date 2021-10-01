import React, {useState} from 'react'
import './App.css';
import Navbar from './components/navbar';
import Home from './components/homescreen';
import Login from './components/login';
import Register from './components/register';
import Cart from './components/cart.jsx';
import Query from './components/query'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  // React.useEffect(() => {
  //   fetch("/home")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/register" exact component={() => <Register />} />
          <Route path="/cart" exact component={() => <Cart />} />
          <Route path="/p" component={ Query }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
