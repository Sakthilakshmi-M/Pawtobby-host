import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {useAuthContext} from "./hooks/useAuthContext"
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import SamplePage from './pages/SamplePage';
import Navbar from './components/Navbar/Navbar';

function App() {
  const {user} = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={!user?<LoginPage />:<Navigate to="/"/>} />
          <Route path="/register" element={!user?<SignupPage />:<Navigate to="/"/>} />
          <Route path="/sample" element={<SamplePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
