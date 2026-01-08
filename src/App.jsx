import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";

import Home from "./pages/Home.jsx";
import Beach from "./pages/Beach.jsx";
import Erick from "./pages/Erick.jsx";
import Mtwilson from "./pages/Mtwilson.jsx";
import Claremont from "./pages/Claremont.jsx";
import Chair from "./pages/Chair.jsx";
import BlockParty from "./pages/blockparty.jsx";
import About from "./pages/about.jsx";
import Veryfirstlife from "./pages/veryFirstLife.jsx";
import Circle from "./pages/loop.jsx";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/beach" element={<Beach />} />
        <Route path="/claremont" element={<Claremont />} />
        <Route path="/mtwilson" element={<Mtwilson />} />
        <Route path="/erick" element={<Erick />} />
        <Route path="/chair" element={<Chair />} />
        <Route path="/blockparty" element={<BlockParty />} />
        <Route path="/about" element={<About />} />
        <Route path="/veryfirstlife" element={<Veryfirstlife />} />
        <Route path="/circle" element={<Circle />} />
      </Routes>
    </AnimatePresence>
  );
}
