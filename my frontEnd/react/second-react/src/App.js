import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Dynamic from './components/Dynamic';
import Footer from './components/Footer';
import List from './components/List';
import Shape from './components/Shape';
import ShortCircuit from './components/ ShortCircuit';
import Form from './components/Form';
import PropsParent from './components/PropsParent';
import { useState } from 'react';
import Fetcher from './components/Fetcher';

function App() {
  const [country] = useState('Nigeria')
  return (
    <div className="App">
       {/* <Navbar/> */}
       <PropsParent country = {country} />
       <Form sam = {country} />
       <Fetcher/>
       <ShortCircuit/>
       <Shape/>
       {/* <Main/>
       <Dynamic/>
       <List/> */}
       {/* <Footer/> */}
    </div>
  );
}

export default App;
