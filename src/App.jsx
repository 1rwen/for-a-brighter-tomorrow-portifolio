import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { Analytics } from "@vercel/analytics/react";

import Home from "./pages/Home.jsx";
import Beach from "./pages/Beach.jsx";
import Erick from "./pages/Erick.jsx";
import Mtwilson from "./pages/Mtwilson.jsx";
import Claremont from "./pages/Claremont.jsx";
import Chair from "./pages/Chair.jsx";
import Chair1 from "./pages/Chair-1.jsx";
import Aurora from "./pages/Aurora.jsx";
import BlockParty from "./pages/blockparty.jsx";
import About from "./pages/about.jsx";
import Veryfirstlife from "./pages/veryFirstLife.jsx";
import Circle from "./pages/loop.jsx";
import Auroralouis from "./pages/Auroralouis.jsx";
import Adam from "./pages/Adam.jsx";
import Newcult from "./pages/new-culture.jsx";


export default function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/beach" element={<Beach />} />
          <Route path="/claremont" element={<Claremont />} />
          <Route path="/adam" element={<Adam />} />
          <Route path="/mtwilson" element={<Mtwilson />} />
          <Route path="/erick" element={<Erick />} />
          <Route path="/chair" element={<Chair />} />
          <Route path="/chair-1" element={<Chair1 />} />
          <Route path="/aurora" element={<Aurora />} />
          <Route path="/blockparty" element={<BlockParty />} />
          <Route path="/about" element={<About />} />
          <Route path="/veryfirstlife" element={<Veryfirstlife />} />
          <Route path="/circle" element={<Circle />} />
          <Route path="/auroralouis" element={<Auroralouis />} />
          <Route path="/newcult" element={<Newcult />} />
        </Routes>
      </AnimatePresence>
      <Analytics />
    </>
  );
}
