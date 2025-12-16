import { useState } from "react";
import Terminal from "./components/Terminal";
import Tetris from "./components/Tetris";

function App() {
  const [isLowPerf, setIsLowPerf] = useState(false);
  const [currentView, setCurrentView] = useState("terminal");

  const togglePerformance = () => {
    setIsLowPerf(!isLowPerf);
    document.body.classList.toggle("low-perf", !isLowPerf);
  };

  const toggleTab = () => {
    setCurrentView((prev) => (prev === "terminal" ? "tetris" : "terminal"));
  };

  return (
    <div className="outer-container">
      <div className="top-container">
        <button className="perf-toggle" onClick={togglePerformance}>
          Performance Mode: {isLowPerf ? "Low" : "High"}
        </button>
        <button className="active-tab" onClick={toggleTab}>
          Active Tab:
          {currentView === "terminal"
            ? " Terminal"
            : currentView === "tetris"
            ? " Tetris"
            : ""}
        </button>
      </div>
      <div className="middle-container">
        <div className="crt-container">
          <div className="crt-screen">
            <div className="crt-glow"></div>
            <div className="crt-scanline"></div>
            {currentView === "terminal" && (
              <Terminal onNavigate={setCurrentView} isLowPerf={isLowPerf} />
            )}
            {currentView === "tetris" && (
              <Tetris onNavigate={setCurrentView} isLowPerf={isLowPerf} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
