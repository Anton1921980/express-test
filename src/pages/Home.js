import React, { useRef } from 'react';
import ContactForm from '../components/ContactForm';
import Main from '../components/Main';


const Home = (props) => {
    
    return (
        <div>
          <Main />
          {/* <ContactForm myRef={ props.myRef } /> */}
        </div>
    );
};

export default Home;