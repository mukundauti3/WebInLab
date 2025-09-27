import logo from './logo.svg';
import './App.css';
import Factorial from './Factorial';
import {Calculater} from './Factorial';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>
    <Factorial num1="6"/>
    <Calculater num2="5" num3="3" operation="Multiplication"/>
    </>
  );
}

export default App;
