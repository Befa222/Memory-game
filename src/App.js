import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Game from './routes/Game'
import LogIn from './routes/LogIn'
import SignUp from './routes/SignUp'

import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './routes/ForgotPassword';

function App() {
 return (
  
      <Router>
          <Switch>
            <Route path='/' exact component={SignUp}/>
            <Route path='/LogIn' component={LogIn}/>
            <PrivateRoute path='/Game' component={Game}/>
            <Route path='/Forgot-password' component={ForgotPassword}/>
          </Switch>
        </Router>
     
    

 )
}

export default App;
