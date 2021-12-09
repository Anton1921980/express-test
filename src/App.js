import './App.css';
import './boot.scss';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Main from './components/Main';
import ContactForm from './components/ContactForm';

function App ()
{

  return (
    <div className="App">
      <NavBar />
      <Main/>
      <ContactForm/>
      <Footer />      
    </div >
  );
}

export default App;
