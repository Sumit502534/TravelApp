import React from 'react'
import "../style/ContactFormStyle.css"

const ContactForm = () => {
  return (
    <div className='from-container'>
        <h1>Send a message to us!</h1>
        <form>
            <input placeholder="Name" type="text" />
            <input placeholder="Email" type="email" />
            <input placeholder="Subject" type="text" />
            <textarea placeholder="Message" rows="4"></textarea>
            <button>Send Message</button>
        </form>
    </div>
  )
}

export default ContactForm