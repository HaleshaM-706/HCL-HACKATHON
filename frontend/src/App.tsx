// import { Link } from 'react-router-dom';
import Dashboard from 'ui/dashboard';
import './App.css';
import Homepage from './ui/homepage';
import Login from './ui/login';
import { Route, Routes } from 'react-router-dom';
// import Homepage from './ui/homepage.tsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
