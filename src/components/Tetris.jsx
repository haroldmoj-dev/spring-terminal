import "../styles/components/Tetris.css";

const Tetris = ({ onNavigate }) => {
  return (
    <div className="crt-container">
      <div className="crt-screen">
        <div className="crt-glow"></div>
        <div className="crt-scanline"></div>
        <div className="tetris-content">
          <div>Tetris Game</div>
          <br />
          <button class="back-button" onClick={() => onNavigate("terminal")}>
            Back to Terminal
          </button>
          {/* Tetris game logic */}
        </div>
      </div>
    </div>
  );
};

export default Tetris;
