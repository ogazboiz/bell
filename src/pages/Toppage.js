import React from 'react'
import secondbg from '../images/secondbg.jpg'
import belsoftlogo from '../images/Belsoft Logo PNG.png'
const Toppage = () => {
  return (
      <div className='firstPage' style={{ backgroundImage: `url(${secondbg})`, backgroundSize: 'cover', height: '100vh' , display: 'flex'}}>
     <div className='darkblue'>
     <img src={belsoftlogo} alt="belsoftlogo" className='belsoftlogo' />
     </div>
     <div className='lightblue'></div>
     <div className='lightpurple'></div>
     <div className='white'></div>
     </div>
  )
}

export default Toppage