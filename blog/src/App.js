import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Blogadd from './components/Blogadd';
import Addform from './components/Addform';

function App() {
  return (
    <div className="App">
      {/* <Addform/> */}
    <Navbar/>
    <Routes>
      <Route path='/Blogadd' element={<Blogadd/>}/>
      <Route path='/Addform' element={<Addform/>}/>
    </Routes>
    {/* <Blogadd/> */}
    </div>
  );
}

export default App;
