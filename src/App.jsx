import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';

function App() {
  return (
    <>

      <Router>
        <Navbar />
        <AppRoutes />
      </Router>


    </>
  );
}

export default App;