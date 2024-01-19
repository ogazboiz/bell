import React from 'react';



const Teammembercard = ({ name, role, email, image }) => {
  return (
    <div className='cardTeam'>
      <img src={image} alt={name} className='teamMember' />
      <h3>{name}</h3>
      <p>{role}</p>
      <p><span className='teamMemberMail'>{email}</span></p>
    </div>
  );
}

export default Teammembercard;
