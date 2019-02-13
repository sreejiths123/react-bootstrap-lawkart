import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';
import Signup from './components/Signup';
import Callback from './components/Callback';
import SecuredRoute from './components/SecuredRoute';
import NewQuestion from './components/NewQuestion';
import Questions from './components/Questions';
import MissingRoute from './components/MissingRoute'
import Admin from './components/Admin'


class App extends Component {
	
		
  render() {
    return (
      <Router>
        <div>
          <Navbar />
		   <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
		  <Route path='/questions' component={Questions} />
		  <SecuredRoute path='/new-question' component={NewQuestion} />
		  <Route path="/signup" component={Signup} />
		  <Route exact path='/callback' component={Callback}/>
		  <Route exact path='/admin' component={Admin}/>
		  <Route  component={MissingRoute}/>
		 </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
