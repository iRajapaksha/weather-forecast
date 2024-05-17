import './App.css';
import Home from './pages/home';
import {BrowserRouter as Router,Routes,  Route } from 'react-router-dom';
import SingUp from './pages/signup';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path = '/home' element= {<Home/>}/>
          <Route path='/signup' element={<SingUp/>}/>

        </Routes>

      </Router>
    </div>
  );
}

export default App;
