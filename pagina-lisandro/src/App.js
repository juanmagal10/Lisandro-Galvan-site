
import './App.css';
import Header from './components/header/Header';
import Carousel from './components/Carousel/Carousel';
import Description from './components/Description/Description';
import Projects from './components/Projects/Projects';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import Carousel2 from './components/Carousel2/Carousel2';


function App() {
  return (
    <div className="App">
      <Header />
      <Carousel2 />
      <Description />
      <Projects />
      <Form />
      <Footer/>
    </div>
  );
}

export default App;
