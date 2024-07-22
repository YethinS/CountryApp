import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login/Login';
import Countries from './pages/Countries/Countries';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/signIn' element={<Login />}></Route>
          <Route path='/countries' element={<Countries />}></Route>
          <Route path='/' element={<Navigate to='/signIn' replace />} />  
        </Routes>
      
      </BrowserRouter>
  );
}


export default App;
