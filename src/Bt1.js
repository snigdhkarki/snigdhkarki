import React from 'react';
import './Roboto-Black.ttf';
import one from './hcjr.jpg';
import two from './pysql.png';
import three from './linux.jpeg';
import four from './firenode.png';
import tosend from './sni.jpg';

const Bt1 = () => {
    return ( <>
    <div className="top">
        <div className="left">
            <div className="big">My name is<br></br>Snigdh Karki</div>
            <div className="long">I am a programmer with expertise in the  <br></br> field of <span className = "brag">FULLSTACK DEVELOPMENT</span> <br></br> and <span className = "brag">DATA ANALYSIS </span>currently studying  <br></br> computer engineering in Pulchowk campus<br></br></div>
            <div className="but"><button className="button" >Contact me</button></div>    
        </div>
        <div className="right">
            <div className="img"><img src={tosend} height="315" width="600"></img></div>

        </div>

    </div>
    <div className="mid">
        <div className="topic">My Bleeding Edge Stack</div>
        <div className="images">
        <div><div className = "lol"><img src={one}></img></div><div >HTML, CSS, Javascript, React for frontend</div></div>
        <div><div className = "lol"><img src={two}></img></div><div>Python for problem solving and SQL for data analysis</div></div>
        <div><div className = "lol"><img src={three}></img></div><div>Linux as primary development environment</div></div>
        <div><div className= "lol"><img src={four}></img></div><div>Firebase, Node JS for backend</div></div>
        </div>        
    </div>
    <div className ="bottom">
        The skills listed above were learn from the following sources:-<br></br><br></br> <span className= 'listmain'><ul><li>The Odin Project:-<br></br> HTML, CSS, Javascript, React, Firebase, Node js, Linux<br></br><br></br></li>
        <li>Edx MIT course on python:-<br></br> Python<br></br><br></br></li><li> Mode:- <br></br> SQL</li></ul></span>
        
    </div>

    <div className="verybottom">
        
    <div className="action">
        <div className="side">    
            <div className="upper">Need a programmer? </div>
            <div className="lower"> Hit me up if you need a website, need your date managed or any kind of help in your project </div>
        </div> 
        <div className="belbut">
            <button  className=" button1"  >Contact</button>
        </div>   
    </div>
    </div>
    <div className ="footer">
        This is subjected to @copyright under my law.
    </div>
    </> );
}
 
export default Bt1;