import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import MoviePage from "./views/movie";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie" element={<MoviePage />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
