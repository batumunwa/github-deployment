import logo from './logo.svg';
import './App.css';
import StateAndProp from './StateAndProp';
import { useState } from 'react';
import Second from './Second';

function App() {
  const [first, setfirst] = useState('Ezrom')
  const [email, setemail] = useState('batumunwa@gmail.com')
  const [exp, setexp] = useState(10)
  return (
    <div className="App">
      <StateAndProp 
      first={first} 
      email={email}
      exp = {exp}/>

      <Second 
      first={first} 
      email={email}
      exp = {exp}/>
    </div>
  );
}

export default App;
