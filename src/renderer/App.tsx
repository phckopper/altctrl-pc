import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import InputsView from './components/InputsView';
import StatusBar from './components/StatusBar';

const Main = () => {
  return (
    <div>
      <StatusBar />
      <InputsView />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}
