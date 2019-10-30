import React from 'react';
import Nav from'./components/Nav/Nav';
import Body from './components/Body/Body';
import CardFlip from './Pages/CardFlip';
import './components/FrontComponent/FrontComponent.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp'
function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Body} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/cardflip" component={CardFlip} />
      <Route exact path="/cardflip" component={CardFlip} />
      <Route exact path="/cardflip" component={CardFlip} />
      <Route exact path="/cardflip" component={CardFlip} />
      
    </div>
    </Router>
    

  );
}

export default App;
