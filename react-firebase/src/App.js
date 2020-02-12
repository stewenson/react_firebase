import React from 'react';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Auth/Login/Login';
import Register from './Components/Auth/Register/Register';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
      <Router>
          <div>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
          </div>
      </Router>
  );
}

export default App;
