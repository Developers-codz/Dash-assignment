import "./App.css";
import { Routes, Route,useLocation } from "react-router-dom";
import { Dashboard, Login, Setting, Signup, Users } from "./pages";
import { useAside } from "./context/asideContext";


function App() {
  const { isDrawerOpen, setDrawerOpen } = useAside();
  const {pathname} = useLocation();
  const clickHandler = () => {
    setDrawerOpen((prev) => !prev);
  };
  return (
    <div className="App ">
      {pathname !== "/" && pathname !== "/signup" ? <div
        className={`fixed inset-y-1/4 -left-8 drawer z-10 bg-color-blue text-white w-16 h-16 rounded-full  ${
          isDrawerOpen ? "left-1/2" : "inset-x-0" 
        } sm:invisible`}
        onClick={clickHandler}
      >
        {isDrawerOpen ? (
          <i className="fa fa-angle-double-left fa-lg" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-angle-double-right fa-lg" aria-hidden="true"></i>
        )}
      </div> : <></> }
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="settings" element={<Setting />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
