import secondbg from './images/secondbg.jpg'
import belsoftlogo from './images/Belsoft Logo PNG.png'
import taillogo from './images/Belsoft Logo White PNG.png'
import workbg from './images/workbg.jpg'
import whitebg from './images/whitebg.png'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './App.css';

function App() {
  return (
    <div className="App" >
      <div className='firstPage' style={{ backgroundImage: `url(${secondbg})`, backgroundSize: 'cover', height: '100vh' , display: 'flex'}}>
        <div className='darkblue'>
        <img src={belsoftlogo} alt="belsoftlogo" className='belsoftlogo' />
        </div>
        <div className='lightblue'></div>
        <div className='lightpurple'></div>
        <div className='white'></div>
      </div>
      {/* the second page starts here */}
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

      {/* thirdpage starts here */}
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
      {/* forth page starts here  */}
      <div className ='forthpage pagebranding' style={{backgroundImage: `url(${whitebg})`, backgroundSize: 'cover', height: '100vh'}}>
      <div className='toptag'>
          <div style={{width:'40%', height:'100%', display:"flex"}}>
            <div style={{background: '#FFFFFF', width:'80%',height:'100%'}}></div>
            <div style={{background:'#148dcc', width:'20%', height: '100%'}}></div>
          </div>
          <p style= {{color: '#000041'}}> It only gets better...</p>
        </div>
        <div className='middle4'>
          <div className= 'top4'>
            <h6>About Belsoft</h6>
            <h3>Our Activities Typically Includes:</h3>
          </div>
          <div className='activitiesblocks'>
            <div className='activityblock'>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" height="26" width="28" viewBox="0 0 576 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"/></svg>
              <p><b>Software Development:</b> Our core activity involve swriting.
                coding, and programming software applications.This includes 
                the creation of web applications, mobile app , desktop softwar,
                and more, Development can be divided into frontend(user interface)
                abd backend (server-side)work. </p>
              </div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zm-312 8v64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80-96V280c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 64v96c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
              
              <p><b>Requiment Analysis:</b> Understanding the specific needs and 
              objectives of clients is crucial. This activity involves working closely with clients is crucial.
              This activity involves working 
              closely with clients to gather requirements, define project scopes and create detailed
              specifications for the software to be developed. </p>
              </div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M208 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-8v40H464c30.9 0 56 25.1 56 56v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-4.4-3.6-8-8-8H312v40h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H256c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V280H112c-4.4 0-8 3.6-8 8v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-30.9 25.1-56 56-56H264V192h-8c-26.5 0-48-21.5-48-48V80z"/></svg>
              
              <p><b>Design and Architecture:</b> Once the requirements are established, software developers
              design the archtecture and user interface of the application. This involves creating wireframes, mockups, and 
              defining the structure of the software. </p>
              </div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
              
              <p><b>Coding and Development: </b> Our Software developers write the actual code for the software,
              using programming languages and development frameworks. This Phase may include testing
              and debugging to ensure the software functions correctly </p>
              </div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
              
              <p><b>Quality Assurance and Testing: </b> Our quality assurance professionals are responsible for testing the software to identify 
              and fix any bugs. issues, or discrepancies. They also ensure that the software meets the clients requirements and performs as expected.</p>
              </div>
            </div>
            {/* activity blocks 2nd side */}
            <div className='activityblock'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" height="26" width="28" viewBox="0 0 576 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"/></svg>
              <p><b>Project Management:</b> Our core activity involve swriting.
                coding, and programming software applications.This includes 
                the creation of web applications, mobile app , desktop softwar,
                and more, Development can be divided into frontend(user interface)
                abd backend (server-side)work. </p>
              </div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zm-312 8v64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80-96V280c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 64v96c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
              
              <p><b>Requiment Analysis:</b> Understanding the specific needs and 
              objectives of clients is crucial. This activity involves working closely with clients is crucial.
              This activity involves working 
              closely with clients to gather requirements, define project scopes and create detailed
              specifications for the software to be developed. </p>
              </div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M208 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-8v40H464c30.9 0 56 25.1 56 56v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-4.4-3.6-8-8-8H312v40h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H256c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V280H112c-4.4 0-8 3.6-8 8v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-30.9 25.1-56 56-56H264V192h-8c-26.5 0-48-21.5-48-48V80z"/></svg>
              
              <p><b>Design and Architecture:</b> Once the requirements are established, software developers
              design the archtecture and user interface of the application. This involves creating wireframes, mockups, and 
              defining the structure of the software. </p>
              </div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
              
              <p><b>Coding and Development: </b> Our Software developers write the actual code for the software,
              using programming languages and development frameworks. This Phase may include testing
              and debugging to ensure the software functions correctly </p>
              </div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
              
              <p><b>Quality Assurance and Testing: </b> Our quality assurance professionals are responsible for testing the software to identify 
              and fix any bugs. issues, or discrepancies. They also ensure that the software meets the clients requirements and performs as expected.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='bottomtag '>
          <img src={taillogo} alt= 'belsoftlogo' style = {{width:'80px', height: '80px', color: '#000041', }}/>
        </div>

        
      </div>
      
      
    </div>
  );
}

export default App;
