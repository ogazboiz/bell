// ContactInput.js

import React from 'react';

const ContactInput = ({ value, onChange }) => {
  return (
    <div>
      <form>
        <input type="text" name='name' placeholder='Your name...'/>
        <input type="email" name='mail' placeholder='Your email...'/>
        <input type="text" name='name' placeholder='Your message...' className='message-text'/>
        <button className="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactInput;
