import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './views/Home';


function App() {
 
  return (
    <div className="main-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
