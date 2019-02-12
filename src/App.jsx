import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';
import Signup from './components/Signup';
import Callback from './components/Callback';
import SecuredRoute from './components/SecuredRoute';
import NewQuestion from './components/NewQuestion';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
		  <SecuredRoute path='/new-question' component={NewQuestion} />
		  <Route path="/signup" component={Signup} />
		  <Route exact path='/callback' component={Callback}/>
        </div>
      </Router>
    );
  }
}

export default App;
