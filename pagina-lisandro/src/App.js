
import './App.css';
import Home from './pages/Home/Home';
import ProjectPage from './pages/ProjectsPages/ProjectPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/project1' element={<ProjectPage/>}></Route>
        <Route path='/project2' element={<ProjectPage/>}></Route>
        <Route path='/project3' element={<ProjectPage/>}></Route>
        <Route path='/project4' element={<ProjectPage/>}></Route>
      </Routes>
 </BrowserRouter>
  );
}

export default App;
