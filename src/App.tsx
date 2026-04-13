import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
