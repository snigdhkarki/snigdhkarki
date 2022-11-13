import React from 'react';
import { useState } from 'react';
import Bt1 from './Bt1';
import Bt2 from './Bt2';
import Bt3 from './Bt3';
import './Roboto-Black.ttf';
import mainLogo from'./circle.png';



function App() {
  const[posi,setposi] = useState(1);
  function bt1(){setposi(1)}
  function bt2(){setposi(2)}
  function bt3(){setposi(3)}


  return (<>
  
  <div className="header">
        
        <img  src={mainLogo} height="80" width="80" />
        
        
        <div className="link">
        <button onClick={bt1} className = 'button' >HOME</button>
        <button onClick={bt2} className = 'button'>PROJECTS</button>
        <button onClick={bt3} className = 'button'>CONTACTS</button>
            
        </div>
  </div>
  
  {(posi==1)&&<Bt1 />}
  {(posi==2)&&<Bt2 />}
  {(posi==3)&&<Bt3 />}</>);
}

export default App;
