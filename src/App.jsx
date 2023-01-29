import { Navbar } from "./components/Navbar";
import { HeroTop } from "./components/HeroTop";
import { HeroBottom } from "./components/HeroBottom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroTop />
      <HeroBottom />
    </div>
  );
}

export default App;
