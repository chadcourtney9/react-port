import './App.css';
import MainContainer from "./components/mainContainer"
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <MainContainer />
    </Router>
  );
}

export default App;
