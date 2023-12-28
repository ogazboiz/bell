import React from 'react'
import workbg from '../images/workbg.jpg'
import taillogo from '../images/Belsoft Logo White PNG.png'
const Thridpage = () => {
  return (
    <div className= 'thirdpage pagebranding' style={{backgroundImage: `url(${workbg})`, backgroundSize: 'cover', height: '100vh'}}>
      <div className='toptag'>
          <div style={{width:'40%', height:'100%', display:"flex"}}>
            <div style={{background: '#FFFFFF', width:'80%',height:'100%'}}></div>
            <div style={{background:'#148dcc', width:'20%', height: '100%'}}></div>
          </div>
          <p style= {{color: '#FFFFFF'}}> It only gets better</p>
        </div>
        <div className= 'textcontainer'>
          <h2> Our Vision:</h2>
          <p>Pursuing perfection in everycode iteration, our objectuive is to contrivute positively on a global
            scale by providing software solutions that are robust scalable, and centered around user experience.
          </p>
        </div>
        <div className='textcontainer ourmission'>
          <h2>Our Mission:</h2>
          <p> Our mission is to empower individuals and organizations globally through advanced
            software engineering, We are commited to delivering top-tier digital solutions that are 
            adaptable and user-centric, consistently meeting the evolving needs of our clients. By 
            seamlessly intergrating innovative technologies, we position ourselves as trusted partner,
            driving digital transformation with excellence and reliablityacross diverse industries.
          </p>
        </div>
        <div className='bottomtag'>
          <img src={taillogo} alt= 'belsoftlogo' style = {{width:'80px', height: '80px', color: '#000041', }}/>
        </div>

      </div>
  )
}

export default Thridpage