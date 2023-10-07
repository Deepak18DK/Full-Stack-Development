import './App.css';
import './Components/login.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/login.js';
import Signup from './Components/Signup';
import AddOrUpdate from './Components/AddOrUpdate';
import Home from './home';
import Page1 from './page1';
import PaymentPage from './page2';
import Page3 from './page3';
import Verify from './verify';
import Profile from './profile';

function App() {
  return (
    <div className="App">
      <title>Furn Web
      </title>
    <BrowserRouter>
    <Routes>
    <Route path="/" element ={<Login />}></Route>
    <Route path="/register" element ={<Signup />}></Route>
    <Route path="/add" element ={<AddOrUpdate />}></Route>
    <Route path="/home" element ={<Home />}></Route>
    <Route path="/page1" element ={<Page1 />}></Route>
    <Route path="/profile" element ={<Profile />}></Route>
    <Route path="/verify" element ={<Verify/>}></Route>
    <Route path="/page2" element ={<PaymentPage />}></Route>
    <Route path="/page3" element={<Page3/>}></Route>
    <Route path="/update/:id" element ={<AddOrUpdate />}></Route>

    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
