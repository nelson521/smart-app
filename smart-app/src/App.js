import React from 'react';
import Nav from'./components/Nav/Nav';
import Body from './components/Body/Body';
import CardFlip from './Pages/CardFlip';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Route path="/" component={Body} />
      <Route path="/cardflip" component={CardFlip} />
    </div>
    </Router>

  );
}

export default App;
