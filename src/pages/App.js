
import '../styles/App.css';
import Banner from './component/Banner';
import LstMenu from './clients/lst_menus';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Banner />
      <div>
        <LstMenu />
      </div>
    </div>
  );

  
}

export default App;