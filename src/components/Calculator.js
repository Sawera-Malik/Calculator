

import '../App.css';
import React, { useState } from 'react';


function Calculator() {

  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  function handleClick(e) {
    setValue(value + e.target.value);
    setError(false);
  }
  function equalClick(e) {
    try {
      setValue(eval(value))
      setError(false)
    } catch {
      setError(true);
    }

  }
  function delClick(e) {
    setValue((prevValue) => (prevValue ? prevValue.slice(0, -1) : ''));
    setError(false);
  }
  function resetClick(e) {
    setValue("");
    setError(false);
  }

  return (
    <div className="App">
      <div className="calc">
        <main>
          <section className="logo">
            <div>
              <h1>calc</h1>
            </div>
            <div className="themeHeader">


            </div>
          </section>
          <input type="text" className='store' placeholder="0" id="input" value={error ? 'Error' : value} readOnly />
          <div className="calculator">
            <div>
              <input type='button' value="7" className='button' onClick={handleClick} />
              <input type='button' value="8" className='button' onClick={handleClick} />
              <input type='button' value="9" className='button' onClick={handleClick} />
              <input type='button' value="DEL" className='del' onClick={delClick} />

            </div>
            <div>
              <input type='button' value="4" className='button' onClick={handleClick} />
              <input type='button' value="5" className='button' onClick={handleClick} />
              <input type='button' value="6" className='button' onClick={handleClick} />
              <input type='button' value="+" className='button' onClick={handleClick} />
            </div>
            <div>
              <input type='button' value="1" className='button' onClick={handleClick} />
              <input type='button' value="2" className='button' onClick={handleClick} />
              <input type='button' value="3" className='button' onClick={handleClick} />
              <input type='button' value="-" className='button' onClick={handleClick} />
            </div>
            <div>
              <input type='button' value="." className='button' onClick={handleClick} />
              <input type='button' value="0" className='button' onClick={handleClick} />
              <input className="operator" type='button' onClick={handleClick} value="/" />
              <input type='button' value="*" className='button' onClick={handleClick} />

            </div>
            <div>
              <input type='button' value="Reset" className='reset' onClick={resetClick} />
              <input type='button' value="=" className='equal' onClick={equalClick} />
            </div>

          </div>

        </main>
      </div>

    </div>

  );
}

export default Calculator;
