import React,{useContext} from 'react';

//Outside Comp
import '../style.scss';
import Fade from 'react-reveal/Fade';
import Cpyrhts from "../components/Cpyrhts.jsx"

import {ConfigContext} from "../GlobalContext"


const Landing = ()=>{
    const Globalconfig = useContext(ConfigContext);

    return(
      <>
      <div style={Globalconfig.authenticatedStatus ? {display:"block"} : {display:"none"}} id="landing">
        <div id="bg">
          <Fade up>
            <h1>Goodyear Staff Site</h1>
          </Fade>
          <Fade left>
            <div id="resButtonHolder">
                <button className="btninfo" style={{backgroundColor:"#03045E"}} onClick={()=>{
                    Globalconfig.authenticatedStatus ? window.open('https://buffalo.erezlife.com/', '_blank') : alert("Please Log in first");
                }}>Duty</button>
                <br></br>
                <Fade right>
                    <h4> -- Login/ Navigate to "Duty Log Report" --</h4>
                </Fade>
                <br></br>
                <br></br>
                <button className="btninfo" style={{backgroundColor:"#023E8A"}} onClick={()=>{
                    Globalconfig.authenticatedStatus ? window.open('https://buffalo.erezlife.com/' , '_blank') : alert("Please Log in first");
                }}>Programming</button>
                <br></br>
                <Fade right>
                    <h4> -- Login/ Navigate to "The Community Builder Proposal" --</h4>
                </Fade>
                <br></br>
                <br></br>
                <button className="btninfo" style={{backgroundColor:"#0096C7"}} onClick={()=>{
                    Globalconfig.authenticatedStatus ? window.open("https://cm.maxient.com/reportingform.php?SUNYBuffalo&layout_id=4","_blank") : alert("Please Log in first");
                }}>Incident Report(IR)/Maxient</button>
                <br></br>
                <Fade right>
                    <h4> -- Fill out the form as <strong>accurate</strong> as possible --</h4>
                </Fade>
                <br></br>
                <br></br>
                <button className="btninfo" style={{backgroundColor:"#00B4D8"}} onClick={()=>{
                    Globalconfig.authenticatedStatus ? window.open("https://buffalo.starrezhousing.com/StarRezWeb/Dashboard/","_blank") : alert("Please Log in first");
                }}>Starrez</button>
                <br></br>
                <Fade right>
                <h4> -- Click "Buffalo Staff Login" - Login --</h4>
                </Fade>
                <br></br>
                <br></br>
                <button className="btninfo" style={{backgroundColor:"#0096C7"}} onClick={()=>{
                    Globalconfig.authenticatedStatus ? window.open("https://buffalo.campuslabs.com/engage/" , "_blank") : alert("Please Log in first");
                }}>UBlinked</button>
                <br></br>
                <Fade right>
                <h4> Relay -- Login/ Click "Goodyear Hall" &#x3e; &#x3e; "Manage Organization" &#x3e; &#x3e; three lines &#x3e; &#x3e; "Roster" &#x3e; &#x3e; "Messaging" &#x3e; &#x3e; "Create Relay" &#x3e; &#x3e; "Send to members holding these
                Positions" &#x3e; &#x3e; Select the members</h4>
                </Fade>
                <br></br>
                <br></br>
                <Fade right>
                    <h3><u>Schedule</u></h3>
                </Fade>
                <br></br>
                <button className="btninfo" style={{backgroundColor:"#0077B6"}} onClick={()=>{
                    Globalconfig.authenticatedStatus ? window.open("https://docs.google.com/spreadsheets/d/1eCCE3QICcjgydSu0CV2xWRrE6pOOv-fkr7UmxA2DYo8/edit?usp=sharing","_blank") : alert("Please Log in first");
                }}>Duty Schedule</button>
                <button className="btninfo" style={{backgroundColor:"#0077B6"}} onClick={()=>{
                    Globalconfig.authenticatedStatus ? window.open("https://docs.google.com/spreadsheets/d/1gYaYLkke9ZHV9hvYMgriUK3ElUiic0-SskwOT_0lKRE/edit#gid=0","_blank") : alert("Please Log in first");
                }}>Late Nights/Large Scales</button>
                <button className="btninfo" style={{backgroundColor:"#0077B6"}} onClick={()=>{
                    Globalconfig.authenticatedStatus ? window.open("https://docs.google.com/document/d/1U_5UZ8-NYD9kMD7U2kaf4aLrVLF3E-qp/edit?usp=sharing&ouid=101993188272590954178&rtpof=true&sd=true","_blank") : alert("Please Log in first");
                }}>RA deadlines</button>
                <br></br>
            </div>
          </Fade>
          <Cpyrhts/>
        </div>
      </div>
      </>
    )
}

export default Landing