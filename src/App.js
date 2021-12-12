import './App.css';
import './boot.scss';
import React, { useRef } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch, Routes, Redirect } from 'react-router-dom';
import About from './pages/About';
import Lorem from './pages/Lorem';
import Home from './pages/Home';
import ContactForm from './components/ContactForm';



function App ()
{
  const myRef = useRef( null )
  const executeScroll = () => myRef.current.scrollIntoView()

  return (
    <div className="App">
      <Router>
        <NavBar executeScroll={ executeScroll } />

        <Switch>
          <Route path='/' exact ><Home myRef={ myRef } /></Route>
          <Route path='/about' exact component={ About } />
          <Route path='/lorem' exact component={ Lorem } />
          <Redirect to='/' />
        </Switch>

        <ContactForm myRef={ myRef } />
        <Footer />
      </Router>
    </div >
  );
}

export default App;
