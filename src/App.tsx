import './App.css';
import Navbar from './Components/Public/Navbar'
import Home from './Components/Public/Home'
import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';


function App() {
  return (
    <div className="App">
     <Outlet></Outlet>
    </div>
  );
}

export default App;
