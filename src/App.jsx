import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Berandapage from "./pages/berandapage";
import Loginpage from "./pages/loginpage";
import Registerpage from "./pages/registerpage";
import "./App.css";
import "./login.css";
import Daftarsaya from "./pages/daftarsaya";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/registerpage" element={<Registerpage />} />
        <Route path="/berandapage" element={<Berandapage />} />
        <Route path="/daftarsaya" element={<Daftarsaya />} />
      </Routes>
    </Router>
  );
}

export default App;
