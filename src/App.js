import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { ContactMe } from './components/ContactMe';
import { Work } from './components/Work';
import { Resume } from './components/Resume';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
    <div id="main-content" class="container">
      <div class="row">
        <AboutMe></AboutMe>
        <ContactMe></ContactMe>
      </div>
      <Work></Work>
      <Resume></Resume>
    </div>
    <Footer></Footer>
    </div>
  );
}

export default App;
