
import './App.css';
import Header from './components/header/Header';
import Carousel from './components/Carousel/Carousel';
import Description from './components/Description/Description';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Description />
      <Projects/>
    </div>
  );
}

export default App;
