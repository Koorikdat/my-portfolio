import logo from './logo.svg';
import './App.css';
import AudioControl from './components/Audio';



function App() {





  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      

        <p>
          You want to hire me so bad
        </p>

        


        <a
          className="App-link"
          href="https://www.linkedin.com/in/maisam-anjum/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Come check this
        </a>
        <AudioControl />
      </header>
    </div>
  );


  
  
  
}

export default App;
