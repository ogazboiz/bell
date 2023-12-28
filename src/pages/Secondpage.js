import React from 'react'
import whitebg from '../images/whitebg.png'
import taillogo from '../images/Belsoft Logo White PNG.png'
const Secondpage = () => {
  return (
    <div className= "secondpage" style={{ backgroundImage: `url(${whitebg})`, backgroundSize: 'cover', height: '100vh' , display: 'flex'}}>
    <div className='toptag'>
      <div style={{width:'40%', height:'100%', display:"flex"}}>
        <div style={{background: '#000041', width:'80%',height:'100%'}}></div>
        <div style={{background:'#148dcc', width:'20%', height: '100%'}}></div>
      </div>
      <p> It only gets better</p>
    </div>
    <div className='middle'> 
    <h2>About Belsoft</h2>
    <p>BELSOFT SYSTEMS LTD is an organization that specilizes in creating and delivering software solutions to mee the technological needs 
      and require,emts of businesses , individuals, and other clients.
    </p>
    <p>Our principal activities encompass a wide range of tasks and responsibilities aimed at desiging. building, and 
      maintaining software aplications.
    </p>
    </div>
    <div className='bottomtag'>
      <img src={taillogo} alt= 'belsoftlogo' style = {{width:'80px', height: '80px', color: '#000041'}}/>
    </div>

  </div>
  )
}

export default Secondpage