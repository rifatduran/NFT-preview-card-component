import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import NFT from './NFT/NFT'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<NFT />}/>
      </Routes>
    </Router>
  );
}

export default App;
