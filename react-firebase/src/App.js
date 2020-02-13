import React from 'react';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Auth/Login/Login';
import Register from './Components/Auth/Register/Register';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./Components/Auth/Auth/Auth";
import PrivateRoute  from './Components/Auth/PrivateRoute/PrivateRoute';
import DashBoard from "./Components/Pages/DashBoard/DashBoard";
import Profile from "./Components/Pages/Profile/Profile";

function App() {
  return (
      <AuthProvider>
          <Router>
              <div>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/register' component={Register} />
                  <PrivateRoute exact path='/dashboard' component={DashBoard} />
                  <PrivateRoute exact path='/profile' component={Profile} />
              </div>
          </Router>
      </AuthProvider>

  );
}

export default App;
