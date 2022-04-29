
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Section from './PriceListComponent/Body/Section/Section';
import FullPage from "./PriceListComponent/FullPage/FullPage"
import Header from './PriceListComponent/Header/Header';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Section />
      <FullPage />




      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
     
    </div>
    </Router>
  );
}

export default App;
