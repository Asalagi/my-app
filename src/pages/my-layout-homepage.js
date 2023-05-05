import { useState } from 'react';
import './layout.css';
import farm from "./horse-ranch.jpeg";
//import NewsLetter from './newsletter';

function HomePage() {
    const [name, setName] = useState(' Your Name')
    const [email, setEmail] = useState(' Your Email')
    
    const handleSubmit = (event) => {
        event.preventDefault()
        alert('Thank you for signing up for our newsletter')
    }
    return (
        <section className="layout-section">
        <div className="layout-box-main">
            <div className="layout-first-half">
                <h1 className="layout-text-big">
                    Welcome to the ranch!
                </h1>
                <div className="image-container">
                <img src={farm} alt='' />
                </div>
                <p className="layout-text-small blah-blah">
                    Put some text here maybe add a picture or something. 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                </p>
             <div className="newsletter-section">
              <div className="newsletter-box">
                  <h2>Sign up for our newsletter.
                  </h2>
              <div className="bottom-page">
                <input className="newsletter-input"
                  type="text" 
                  id="name" 
                  name="name" 
                  value={name} 
                  onChange={e => setName(e.target.value)} /><br />
                <input className="newsletter-input"
                  type="text" 
                  id="email" 
                  name="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} /><br />
                 <button type="button" onClick={handleSubmit}>Sign Up!</button>
               </div>
               </div>
               </div>
               </div>
        </div>
      </section>
    )
}

export default HomePage;