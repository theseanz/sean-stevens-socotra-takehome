import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MultiStepForm from './components/MultiStepForm';
import Success from './pages/Success';

function App() {
  return (
    <div
      className='min-h-screen'
      style={{ backgroundColor: 'hsl(0, 0%, 98%)' }}
    >
      <Header />
      <Routes>
        <Route path='/' element={<MultiStepForm />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
