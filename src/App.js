import { useState } from 'react';
import './App.css';
import moonIcon from './asset/moon.png';
import sunIcon from './asset/sun.png'
import Header from './Component/Header';
import Keypad from './Keypad/Keypad';
import Flip from 'react-reveal/Flip';
import Navbar from './Navbar';




function App() {
  const[isDark,setIsDark]=useState(false);
  return (   
    <div>
    <Navbar/>
     <div className="app" 
    data-them={isDark?"dark":""}>
      <Flip left>
      <div className="app-calculator">
        <div className='app_calculator_navbar'>
          <div className='app_calculator_navbar_toggle' onClick={()=>setIsDark(!isDark)}>
          <div className={`app_calculator_navbar_toggle_circle ${
            isDark?
            "app_calculator_navbar_toggle_circle_active": ""
          }`}/>
          </div>
          <img src={isDark ? moonIcon:sunIcon} alt="mode" />
        </div>
        <Header/>
        <Keypad/>
      </div>
      </Flip>
    </div>
    </div>
  );
}

export default App;
