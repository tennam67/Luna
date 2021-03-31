import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Home = lazy(() => import('./pages/homePage'));
const LoginPage = lazy(() => import('./pages/loginPage'));
const RegistrationPage = lazy(() => import('./pages/registrationPage'));
const NewRestaurantPage = lazy(() => import('./pages/newRestaurantPage'))
const UserProfile = lazy(() => import('./pages/userProfilePage'));
const SearchPage = lazy(() => import('./pages/searchPage'));
const RestaurantPage = lazy(() => import('./pages/restaurantPage'));

const  Routes = () => {
  return (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/search" component={SearchPage}/>
      <Route exact path="/restaurant" component={RestaurantPage} />
      <Route exact path="/userProfile" component={UserProfile}/>
      <Route exact path="/registration" component={RegistrationPage}/>
      <Route exact path="/login" component={LoginPage}/>
      <Route exact path="/newRestaurant" component={NewRestaurantPage}/>

      </Switch>
    </Suspense>
  </Router>
  );
}

export default Routes;