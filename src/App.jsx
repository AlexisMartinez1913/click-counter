import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import freeCodeCampLogo from './images/freecodecamp-logo.png';


function App() {

  const [numClicks, setNumClicks] = useState(0);

  //definir funciones y se pasan como prop
  const handleClick = () => {
    
    setNumClicks(numClicks => numClicks + 1);
    console.log(numClicks);
  };

  const restartCounter = () => {
    setNumClicks(0);
    //console.log(numClicks);
  };


  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='logo'
        />
      </div>
      <div className='main-container'>
        <Counter
          numberClick={numClicks}
        />
        <Button
          text="Click"
          isButtonClick={true}
          handleClick={handleClick}
        />

        <Button
          text="Restart"
          isButtonClick={false}
          handleClick={restartCounter}
        />

      </div>

    </div>
  )
}

export default App;
