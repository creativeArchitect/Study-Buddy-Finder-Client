import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from './pages/Dashboard'
import Dashboard from "./pages/Dashboard";
import Profile from './pages/Profile';
import StudyRoom from './pages/StudyRoom';
import Login from './pages/Login';
import Signup from './pages/Signup'
function App() {

  return (
    <Routes>
      <Route>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/study-room' element={<StudyRoom />} />
      </Route>
    </Routes>
  )
}

export default App
