import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ApplyForm from './components/ApplyForm.js';
import Home from './pages/Home.js';
import Example from './components/Example.js';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ApplyForm />} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
