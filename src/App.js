import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calendar from './pages/Calendar';
import Committees from './pages/Committees';
import DailyMonitoring from './pages/DailyMonitoring';
import Home from './pages/Home';
import Initiatives from './pages/Initiatives';
import Mission from './pages/Mission';
import Social from './pages/Social';
import Visuals from './pages/Visuals';
import Navbar from './components/Navbar';
import PageLayout from './components/Template/PageLayout';

function App() {
  return (

    <Router>
      <PageLayout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/daily-monitoring" element={<DailyMonitoring />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/social" element={<Social />} />
          <Route path="/visuals" element={<Visuals />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
