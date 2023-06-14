import './index.css';
import Circle from './components/Circle';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useState } from 'react';

function App() {
  const [display, setDisplay] = useState(false);

  function changeStatus(){
    setDisplay(true);
  }

  return (
    <div className="App">

     {/* nav */}
      <nav>
        <h3>ME</h3>
        <h3>WORKS</h3>
        <h3>AWARDS</h3>
        <h3>PLAYGROUND</h3>
        <h3>CONTACT</h3>
      </nav>

     {/* title */}
      <h1>SANJEEV MIDDA</h1>
      {/* <h1>FOLIO</h1> */}

     {/* content */}
      <div className="content">
        <Circle color="radial-gradient(yellow, blue)"/>
        <Circle color="radial-gradient(grey, pink)"/>
        <Circle color="radial-gradient(purple, orange)"/>
        <Circle color="radial-gradient(red, black)"/>
        <Circle color="radial-gradient(blue, pink)"/>
        <Circle color="radial-gradient(orange, brown)"/>
        <Circle color="radial-gradient(yellow, purple)"/>
        <Circle color="radial-gradient(black, white)"/>
        <Circle color="radial-gradient(beige, coral)"/>
        <Circle color="radial-gradient(green, blue)"/>
        <Circle color="radial-gradient(pink, brown)"/>
        <Circle color="radial-gradient(grey, blue)"/>
        <Circle color="radial-gradient(red, green)"/>

      </div>

     {/* title2 */}
     <RoughNotation type="crossed-off" show={display} color="green" number={2}>
        <div className="title2" onClick={changeStatus}>
          <h1>ALL</h1>
          <h1>RIGHTS</h1>
          <h1>RESERVED</h1>
        </div>
     </RoughNotation>

     {/* footer */}
      <footer>
        <h3>SANJEEV M FOLIO</h3>
        <h3>FULL STACK DEVELOPER</h3>
        <h3>@2023</h3>
      </footer>
    </div>
  );
}

export default App;
