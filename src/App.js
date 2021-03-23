import "./App.css";
import Board from "./components/Board";

export default function App() {
  return (
    <div className="container">
      <h1>Logo Memory Game</h1>
      <h2>Don't click the same icon twice!</h2>
      <Board />
    </div>
  );
}
