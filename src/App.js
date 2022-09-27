import './App.css';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link> {" "}
      <Link to="/profile">Profile</Link>
      <Routes>
        <Route path="/" element={"Home  page"} />
        <Route path="/profile" element={"Amanbek"} />
      </Routes>
    </div>
  );
}

export default App;
