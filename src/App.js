import './App.css';

import { Routes, Route } from 'react-router-dom';

// global components 
import AppBar from './components/global/AppBar';

// info scenes
import LandingPage from './components/scenes/LandingPage/index';
import About from './components/scenes/About';
import Carriers from './components/scenes/Carrieres';
import Feature from './components/scenes/Features';
import Shippers from './components/scenes/shippers';

// Auth Scenes
import Login from './components/scenes/authentication/Login';
import SignUp from './components/scenes/authentication/SignUp';
import ForgotPassword from './components/scenes/authentication/ForgotPassword';
import ResetPassword from './components/scenes/authentication/ResetPassword';


function App() {
  return (
    <div className="app">
      <AppBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/carries" element={<Carriers />} />
        <Route path="/shippers" element={<Shippers />} />
        <Route path="/features" element={<Feature />} />

        {/* auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgeot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
