import React from 'react';
import './App.css';
import Header from './pages/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Features from './pages/features/Features';
import Footer from './pages/footer/Footer';
import { Element } from 'react-scroll';
import { GoogleOAuthProvider } from '@react-oauth/google';



const App = () => {
  return (
    <>
      <GoogleOAuthProvider clientId="406918778298-vgetffb2bed0hl8sjiesmi5khm20qq92.apps.googleusercontent.com">
        <Header />
        <Element name="/"> <Home /></Element>
        <Element name="About"><About /></Element>
        <Element name="Features"><Features /></Element>
        <Element name="Footer"><Footer /></Element>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
