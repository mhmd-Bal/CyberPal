import LoginPage from 'Pages/LoginPage';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
import 'primeicons/primeicons.css';
import LandingPage from 'Pages/LandingPage';
import ManageUsersPage from 'Pages/ManageUsersPage';
import ManageToolsPage from 'Pages/ManageToolsPage';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ManageUsersPage />} />
        <Route path="/admin/manage-tools" element={<ManageToolsPage />} />
      </Routes>
    </Router>
  );
}
