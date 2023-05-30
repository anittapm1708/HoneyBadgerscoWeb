import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import './App.css';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path=""
            element={
              <Home/>
            }
          />
          <Route
            path="/Home"
            element={
              <>
                <h2>Home</h2>
              </>
            }
          />
          <Route
            path="/Products"
            element={
              <>
                <h2>Products</h2>
              </>
            }
          />
          <Route
            path="/Contact"
            element={
              <>
                <h2>Contact Us</h2>
              </>
            }
          />
          <Route
            path="/About"
            element={
              <>
                <h2>About Us</h2>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
