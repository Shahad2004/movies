import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './componenets/NavBar'

const Home = () => <h1>Home Page</h1>;
const Movies = () => <h1>Movies List</h1>;

function App() {
 return (
  <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
  </Router>
);
}

export default App;
