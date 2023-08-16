// import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Signup from './components/SignUp';

import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
     <Route path='/dashboard' element={<Display/>}  />
     <Route path='/' element={<SignIn/>}  />
     <Route path='/signup' element={<Signup/>}  />
     
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
