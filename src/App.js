
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Profile from "./Profile";
import Home from "./Home";
import MainPage from "./MainPage";
import Calendar from './Calendar';
import './style.css';


function App() {
  return (
    <div>
      <div className="enterProfRot">
          <Router>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/MainPage" element={<MainPage/>}/>
            <Route path="/Calendar" element={<Calendar/>}/>
            </Routes>
          </Router>
      </div>
    </div>
  );
}

export default App;