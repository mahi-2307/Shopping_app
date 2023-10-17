import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
function App() {
  return (
  <Router>
        <Navbar/>
    <Routes>
     <Route path="/" element={<Home />} />
    </Routes>
  </Router>
  );
}

export default App;
