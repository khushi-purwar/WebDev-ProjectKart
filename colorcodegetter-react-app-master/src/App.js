import EmptyValue from "./EmptyValue";
import AddColor from "./AddColor";
import { useState } from 'react';

function App() {
  const[ colorValue, setColorValue ] = useState(' ');
  const[ hexValue, setHexValue] = useState(' ');
  const[isDarkText, setIsDarkText] = useState(true) 

  return (
    <div className="App">
      <EmptyValue 
       colorValue={colorValue}
       hexValue = {hexValue}
       isDarkText = {isDarkText}
      />
      <AddColor
       colorValue={colorValue}
       setColorValue={setColorValue}
       setHexValue={setHexValue}
       isDarkText={isDarkText}
       setIsDarkText={setIsDarkText}
      />

    </div>
  );
}

export default App;
