import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';

function App() {
  return(
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App;