import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./components/Login";
import Welcome from './components/Welcome';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App;
