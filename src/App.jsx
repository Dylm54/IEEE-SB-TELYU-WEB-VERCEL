import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FAQ from './pages/FAQ'
import { Departments } from './pages/Departments'
import DetailNews from './pages/DetailNews'
import News from './pages/News'
import { DetailDepartments } from './pages/DetailDepartments'
import Login from './pages/Login'
import Achievement from './pages/Achievement'
import { DashboardNews } from './pages/DashboardNews'
import DashboardAchievements from './pages/DashboardAchievements'
import DashboardRecentActivities from './pages/DashboardRecentActivities'
import AddNews from './pages/AddNews'
import EditNews from './pages/EditNews'
import AddAchievement from './pages/AddAchievement'
import AddRecentActivity from './pages/AddRecentActivity'
import PrivateRoutes from './utils/PrivateRoutes'
import EditAchievement from './pages/EditAchievement'
import EditRecentActivity from './pages/EditRecentActivity'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/Departments' element={<Departments />} />
        <Route path='/DetailNews/:id' element={<DetailNews />} />
        <Route path='/DetailDepartments/:index' element={<DetailDepartments />} />
        <Route path='/AdminForJournalists' element={<Login />} />
        <Route path='/Achievements' element={<Achievement />} />
        <Route path='/News/:kategori' element={<News />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/DashboardNews' element={<DashboardNews />} />
          <Route path='/DashboardAchievements' element={<DashboardAchievements />} />
          <Route path='/DashboardRecentActivities' element={<DashboardRecentActivities />} />
          <Route path='/AddNews' element={<AddNews />} />
          <Route path='/AddAchievement' element={<AddAchievement />} />
          <Route path='/AddRecentActivity' element={<AddRecentActivity />} />
          <Route path='/EditNews/:id' element={<EditNews />} />
          <Route path='/EditAchievement/:id' element={<EditAchievement />} />
          <Route path='/EditRecentActivity/:id' element={<EditRecentActivity />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;