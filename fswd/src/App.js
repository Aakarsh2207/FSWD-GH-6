
import { useState } from 'react';
import './App.css';
import ClassComponent from './components/classComponents';
import FunctionalComponent from './components/functionalComponent';


function App() {
  const company = "DevTown";
  const [name, setName] = useState("Aakarsh");
  return (
    <div>
      <h1>This is a Functional Component</h1>
      <ClassComponent />
      {/* <FunctionalComponent /> */}
      <FunctionalComponent name={name} age={20} company={company} setName={setName}/>
      {/* <FunctionalComponent />
      <FunctionalComponent />
      <FunctionalComponent />
      <FunctionalComponent /> */}
    </div>
  );
}

export default App;
