import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchMovies from "./components/SearchMovies";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchMovies />} />
      </Routes>
    </Router>
  );
}

export default App;
