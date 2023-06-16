import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';
import Main from './components/Main';
import Dynamic from './components/Dynamic';
import Header from './components/Header';
import Cssgrid from './components/Cssgrid';
import Click from './components/Click';
import ExplainState from './components/ExplainState';
import StateReExplain from './components/StateReExplain';
import List from './components/List';

function App() {
  return (
    <div className="App">
    <section>
      <Navbar/>
      <List/>
      {/* <StateReExplain/> */}
      {/* <ExplainState/>
      <Header/>
      <Click/>
      <Cssgrid/>
      <Section/>
      <Footer/>
      <Main/>
      <Dynamic/> */}
    </section>
    </div>
  );
}

export default App;
