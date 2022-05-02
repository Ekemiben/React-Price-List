
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Section from './PriceListComponent/Body/Section/Section';
import FullPage from "./PriceListComponent/FullPage/FullPage"
import Header from './PriceListComponent/Header/Header';
import Cards from './PriceListComponent/Cards/Cards';
import Basic from './PriceListComponent/forms/Basic';
import Pro from './PriceListComponent/forms/Pro'
import Premium from './PriceListComponent/forms/Premium';
import Footer from './PriceListComponent/Footer/Footer';
import Condition from './PriceListComponent/Body/Section/Condition';

function App() {
  return (
   
    <div className="App">
      <Header />
      <Section />

      <Router>
        <Routes>
        <Route exact path='/' element={<Cards />}></Route>
        <Route path='/basic' element={<Basic />}></Route>
        <Route path='/pro' element={<Pro />}></Route>
        <Route path='/premium' element={<Premium />}></Route>
      </Routes>
      </Router>

      <Condition />

      <Footer />
    </div>
   
  );
}

export default App;
