import Learn from './Learn';
import ThreeCard from './ThreeCard';
import OneCard from './OneCard';
import Explore from './Explore';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/learn" element={<Learn />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/three-card" element={<ThreeCard />} />
        <Route path="/one-card" element={<OneCard />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default AppRoutes;