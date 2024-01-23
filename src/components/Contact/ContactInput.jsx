// ContactInput.js

import React from 'react';

const ContactInput = ({ value, onChange }) => {
  return (
    <div>
      <form>
        <input type="text" name='name' placeholder='Enter name...'/>
        <input type="email" name='mail' placeholder='Enter your email...'/>
        <input type="text" name='name' placeholder='Enter message...' className='message-text'/>
        <button className="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactInput;
