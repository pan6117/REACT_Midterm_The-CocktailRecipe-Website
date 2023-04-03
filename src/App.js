import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Details from "./pages/Details/Details";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
