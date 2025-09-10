/**
 * Root application component that sets up client-side routing
 * for the home page and the movie description page.
 */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// Route components
import Description from "./pages/Description";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      {/* Define application routes */}
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home />} />

        {/* Description page route with a dynamic :id URL parameter */}
        <Route path="/description/:id" element={<Description />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
