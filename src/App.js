
import './App.css';
import {Routes,Route} from "react-router-dom"
import { Dashboard, Login, Setting, Signup, Users } from './pages';
import { Aside } from './components';

function App() {
  return (
    <div className="App ">
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="settings" element={<Setting />} />
      <Route path="users" element={<Users />} />
    </Routes>
    </div>
  );
}

export default App;
