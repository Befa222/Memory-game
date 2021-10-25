import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Game from './routes/Game'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import { AuthPovider } from './contexts/AuthContext';


function App() {
 return (
    <AuthPovider>
      <Router>
          <Switch>
            <Route path='/' exact component={SignUp}/>
            <Route path='/LogIn' component={LogIn}/>
            <Route path='/Game' component={Game}/>
          </Switch>
        </Router>
    </AuthPovider>

 )
}

export default App;
