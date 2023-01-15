import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ApplyForm from './components/ApplyForm.js';
import Home from './pages/Home.js';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ApplyForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
