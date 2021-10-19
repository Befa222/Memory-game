import { useState } from 'react';
import './App.css';
import poke1 from './images/4.png'
import poke2 from './images/5.png'
import poke3 from './images/23.png'
import poke4 from './images/24.png'
import poke5 from './images/25.png'
import poke6 from './images/26.png'
import poke7 from './images/41.png'
import poke8 from './images/42.png'
import poke9 from './images/63.png'
import poke10 from './images/65.png'
import poke11 from './images/93.png'
import poke12 from './images/94.png'


function App() {

  
const images = [poke1, poke2, poke3, poke4, poke5, poke6, poke7, poke8, poke9, poke10, poke11, poke12,poke1, poke2, poke3, poke4, poke5, poke6, poke7, poke8, poke9, poke10, poke11, poke12]

const [randomImage, setRandomImages] = useState()

const randomize = () => {
setRandomImages(images.sort(() => Math.random() - 0.5).map(e=>e))
}

  return (
    <div>
      <section>
      {images.sort(() => Math.random() - 0.5).map(e=>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
          </div>
          <div className="flip-card-back">

            <img className='cardImage' src={e} alt='pokemon'/>
          </div>
        </div>
      </div>
      )}
     </section>
     <button>test</button>
     
    </div>
  );
}

export default App;
