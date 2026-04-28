import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Header from "./components/header/Header";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState<string>("");

  return (
    <BrowserRouter>
      <Header query={query} setQuery={setQuery} />
      <Routes>
        <Route path="/" element={<Home query={query} />} />
        <Route path="/movie/:id" element={<MovieDetails />} />

        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
