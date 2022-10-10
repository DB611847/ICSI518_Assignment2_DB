import './App.css';
import logo from './Icon.png'
import face_icon from './face_icon.jpg'
function App() {
  return (

    <div className="App">
      <img style={{ "backgroundColor": "lightskyblue"}} align="left"  src={logo} height="35" width="35" ></img>
      <div style={{ "backgroundColor": "lightskyblue"}}align="left" >
        
        <h1>&nbsp; Welcome to my 1st React app!</h1>
     </div>
     <img src={face_icon} align='left' height="300" width="300"></img>
     <blockquote align="left" contentEditable="true" width="300">
        <h2>Type your name here.</h2>
      </blockquote>
      <blockquote align="left" contentEditable="true">
        <p >Type your description here. </p>
        </blockquote>
    </div>
  );
}

export default App;

