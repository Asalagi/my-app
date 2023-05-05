import './layout.css'
import { useState } from 'react';

function NewsLetter() {
    const [name, setName] = useState(' Your Name')
    const [email, setEmail] = useState(' Your Email')
    
    const handleSubmit = (event) => {
        event.preventDefault()
        alert('Thank you for signing up for our newsletter')
    }
    
    return (
        <section className="layout-section">
        <div>
            <h2>Keep up to date with our farm.<br />
                Sign up for our newsletter.
            </h2>
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
         </section>
    )
}

export default NewsLetter;