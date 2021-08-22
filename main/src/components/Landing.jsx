import React from 'react';

//Outside Comp
import '../style.scss';
import Fade from 'react-reveal/Fade';

const Landing = ()=>{
    return(
      <>
      <div id="landing">
        <div id="bg">
          <Fade up>
            <h1>Goodyear Staff Site</h1>
          </Fade>
          <Fade left>
            <div id="resButtonHolder">
                <button style={{backgroundColor:"#03045E"}} onClick={()=>{
                    window.open('https://buffalo.erezlife.com/', '_blank');
                }}>Duty</button>
                <Fade right>
                    <h4>Login/ Navigate to "Duty Log Report"</h4>
                </Fade>
                <br></br>
                <button style={{backgroundColor:"#023E8A"}} onClick={()=>{
                    window.open('https://buffalo.erezlife.com/' , '_blank')
                }}>Programming</button>
                <Fade right>
                    <h4>Login/ Navigate to "The Community Builder Proposal"</h4>
                </Fade>
                <br></br>
                <button style={{backgroundColor:"#0077B6"}} onClick={()=>{
                    window.open("https://docs.google.com/spreadsheets/d/1eCCE3QICcjgydSu0CV2xWRrE6pOOv-fkr7UmxA2DYo8/edit?usp=sharing ","_blank")
                }}>Schedule</button>
                <Fade right>
                    <h4>Navigate Google Sheets</h4>
                </Fade>
                <br></br>
                <button style={{backgroundColor:"#0096C7"}} onClick={()=>{
                    window.open("https://cm.maxient.com/reportingform.php?SUNYBuffalo&layout_id=4","_blank")
                }}>Incident Report(IR)/Maxient</button>
                <Fade right>
                    <h4>Fill out the form as <strong>accurate</strong> as possible</h4>
                </Fade>
                <br></br>
                <button style={{backgroundColor:"#00B4D8"}} onClick={()=>{
                    window.open("https://buffalo.starrezhousing.com/StarRezWeb/Dashboard/","_blank")
                }}>Starrez</button>
                <Fade right>
                <h4>Click "Buffalo Staff Login" - Login</h4>
                </Fade>
            </div>
          </Fade>
        </div>
      </div>
      </>
    )
}

export default Landing