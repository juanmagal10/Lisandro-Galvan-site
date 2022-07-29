
import './App.css';
import Home from './pages/Home/Home';
import ProjectPage from './pages/ProjectsPages/ProjectPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import imgRefugio from './components/Projects/imgs/img-refugio.jpg'
import imgReciclaje from './components/Projects/imgs/img-reciclaje.jpg'
import imgVivero from './components/Projects/imgs/img-vivero.jpg'
import imgBasuraElectronica from './components/Projects/imgs/img-basura-electronica.jpg'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/project1' element={<ProjectPage projectName={'Refugio'} projectImg={imgRefugio } />}></Route>
        <Route path='/project2' element={<ProjectPage projectName={'Reciclaje'} projectImg={imgReciclaje }/>}></Route>
        <Route path='/project3' element={<ProjectPage projectName={'Vivero'} projectImg={imgVivero }/>}></Route>
        <Route path='/project4' element={<ProjectPage projectName={'Recoleccion de Basura Electronica'} projectImg={imgBasuraElectronica}/>} ></Route>
      </Routes>
 </BrowserRouter>
  );
}

export default App;
