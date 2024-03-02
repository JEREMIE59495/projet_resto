
import '../styles/App.css';
import Banner from './component/Banner';
import LstMenu from './clients/lst_menus';


function App() {
  return (
    <div className="App">
      <Banner />
      <div>
        <LstMenu />
      </div>  
    </div>
  );

  

  
}

export default App;