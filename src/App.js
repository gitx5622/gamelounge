import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home';
import { history } from './utils/history';
import NotFound from './components/notFound';
import LoginForm from './auth/loginForm';
import Register from './auth/registerForm';

const App = () =>  {
  return (
      <div>
      <Router history={history}>
      <Switch>
        <Route path={["/login","/register","/blog","/contact","/notfound","/"]}>
            <Route path="/login" component={LoginForm}/>
            <Route path="/register" component={Register}/>
            <Route path="/notfound" component={NotFound} />
            <Route exact path="/" component={Home}/>
        </Route>
      </Switch>
      </Router>
      </div>
  );
}

export default App;
