import "./App.css";
import Nav from "./sections/Navbar";
import Home from "./sections/home/Home";
import { GoogleGeminiEffectDemo } from "./assets/GeminiEffect";
import Sidebar from "./sections/sidebar/Sidebar";

function App() {
  return (
    <div className="parent">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
