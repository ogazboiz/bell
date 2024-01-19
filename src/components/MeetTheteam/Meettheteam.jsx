import React from 'react'
import './Meettheteam.css'
import Teammembercard from './Teammembercard'
const Meettheteam = () => {
  return (
    <div className='TeamMemberCardContainer'>
        <h2>Meet The Team</h2>
       <div>
        <Teammembercard />
        <Teammembercard />
        <Teammembercard />
        <Teammembercard />
        <Teammembercard />
       </div>
    </div>
    
  )
}

export default Meettheteam