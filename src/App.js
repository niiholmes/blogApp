import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import HomePage from './Pages/Home/HomePage.js';
import AboutPage from './Pages/About/AboutPage.js';
import ContactPage from './Pages/Contact/ContactPage';
import SigninPage from './Pages/SignIn/SigninPage';
import SignupPage from './Pages/Signup/SignupPage';
import NavBar from './Content/NavBar/NavBar.js'
import ArticlePage from './Pages/ArticlePage/ArticlePage.js';




//import './App.css';

const App =()=> {
  return (
    <>
    <Router>
    <div>
      <NavBar/>
      <Route path='/' component={HomePage} exact />
      <Route path='/about' component={AboutPage}/>
      <Route path='/contact-me' component={ContactPage}/>
      <Route path='/login' component={SigninPage}/>
      <Route path='/signup' component={SignupPage}/>
      <Route path='/article/:name' component = {ArticlePage}/>
      
      
    </div>
    </Router>
    
    

    </>

  );
}

export default App;
