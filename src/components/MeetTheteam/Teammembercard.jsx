import React from 'react'
import pic from './test.jpeg'
const Teammembercard = (name) => {
  return (
    <div className='cardTeam'>
        <img src={pic} alt='pic' className='teamMember'/>
        <h3>Abayomi Aremo</h3>
        <p>Frontend Developer</p>
        <p><span className='teamMemberMail'>abayomiaremo0@gmail.com</span></p>
           </div>
  )
}

export default Teammembercard