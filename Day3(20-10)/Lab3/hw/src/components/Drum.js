import '../styles/style.css';
import crash from '../images/crash.png';
import kick from '../images/kick.png';
import snare from '../images/snare.png';
import tom1 from '../images/tom1.png';
import tom2 from '../images/tom2.png';
import tom3 from '../images/tom3.png';
import tom4 from '../images/tom4.png';

import React from 'react';

function Drum (){
      return (
        <div>
          <div style={{textAlign: 'center', fontSize: '60px', color: 'white'}}>
            <h1>Drum App</h1>
          </div>
          <div style={{display: 'flex'}}>
            <button id="a" className="btn" onclick="myFunctionA()">
              <div className="container">
              <img width="150" height="100" src={crash} alt="Snow" />
                <div className="centered">A</div>
                <audio id="audioA" src="crash.mp3" />
              </div>
            </button>
            <button className="btn" onclick="myFunctionB()">
              <div className="container">
              <img width="150" height="100" src={kick} alt="Snow" />
                <div className="centered">B</div>
                <audio id="audioB" src="kick-bass.mp3" />
              </div>
            </button>
            <button className="btn" onclick="myFunctionC()">
              <div className="container">
              <img width="150" height="100" src={snare} alt="Snow" />
                <div className="centered">C</div>
                <audio id="audioC" src="snare.mp3" />
              </div>
            </button>
            <button className="btn" onclick="myFunctionD()">
              <div className="container">
              <img width="150" height="100" src={tom1} alt="Snow" />
                <div className="centered_temp">D</div>
                <audio id="audioD" src="tom-1.mp3" />
              </div>
            </button>
            <button className="btn" onclick="myFunctionE()">
              <div className="container">
              <img width="150" height="100" src={tom2} alt="Snow" />
                <div className="centered_temp">E</div>
                <audio id="audioE" src="tom-2.mp3" />
              </div>
            </button>
            <button className="btn" onclick="myFunctionF()">
              <div className="container">
              <img width="150" height="100" src={tom3} alt="Snow" />
                <div className="centered_temp">F</div>
                <audio id="audioF" src="tom-3.mp3" />
              </div>
            </button>
            <button className="btn" onclick="myFunctionG()">
              <div className="container">
              <img width="150" height="100" src={tom4} alt="Snow" />
                <div className="centered_temp">G</div>
                <audio id="audioG" src="tom-4.mp3" />
              </div>
            </button>
          </div>
          <div style={{marginTop: '30px', display: 'flex', textAlign: 'center', marginLeft: '25%'}}>
            <button className="btn" onclick="myFunctionH()">
              <div className="container">
                <img src="data:image/jpeg;base64,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" alt="Snow" style={{width: '150px', height: '100px'}} />
                <div className="centered">H</div>
                <audio id="audioH" src="piano.wav" />
              </div>
            </button>
            <button className="btn" onclick="myFunctionJ()">
              <div className="container">
                <img src="https://m.media-amazon.com/images/I/81tQhEEtiEL._AC_SX679_.jpg" alt="Snow" style={{width: '150px', height: '100px'}} />
                <div className="centered">J</div>
                <audio id="audioJ" src="guitar.wav" />
              </div>
            </button>
            &gt;
            <button className="btn" onclick="myFunctionK()">
              <div className="container">
                <img src="https://www.magneticmag.com/.image/t_share/MTMzMDU3ODI0NTY4NjUwMzcx/edm-news--native-instruments-launches-maschine-studio-and-20-software.jpg" alt="Snow" style={{width: '150px', height: '100px'}} />
                <div className="centered_temp">K</div>
                <audio id="audioK" src="edm.wav" />
              </div>
            </button>
          </div>
          <div style={{display: 'block'}}>
          </div>
          <p id="log" />
        </div>
      );
}

export default Drum;