
import './App.css';
import Section from './PriceListComponent/Body/Section/Section';
import FullPage from "./PriceListComponent/FullPage/FullPage"
import Header from './PriceListComponent/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <FullPage />
     
    </div>
  );
}

export default App;
