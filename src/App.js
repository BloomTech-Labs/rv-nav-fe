import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
// import Auth from './components/auth/Auth';
import Map from './components/map/Map';
import LandingPage from './components/landingPage/LandingPage';
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register';
import RegisterHooks from './components/auth/register/Register-Hooks';
import RoutingPref from './components/auth/routingPref/Routing-Pref';
import LoadingPage from './components/auth/loading/LoadingPage';
import Personal from './components/personalInfoForm/PersonalInfoForm';
import Vehicle from './components/auth/VehicleInfo/VehicleLoginForm';




const App = () => {
  return (
    <div className="App">
      <Route path="/" exact component={LandingPage} />
      {/* <Route path="/auth" component={Auth} /> */}
      <Route path="/map" component={Map} />
      <Route path="/personal" component={Personal} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={RegisterHooks} />
      <Route path="/routingPref" component = {RoutingPref}/>
      <Route path="/load" component = {LoadingPage}/>
      <Route path="/vehicle" component = {Vehicle}/>
      
    </div>
  );
};

export default App;
