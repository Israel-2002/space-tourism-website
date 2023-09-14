import { Route, Routes } from "react-router-dom";
import "./css/style.css";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import Destination from "./pages/destination/Destination";
import Moon from "./pages/destination/moon/Moon";
import Mars from "./pages/destination/mars/Mars";
import Europa from "./pages/destination/europa/Europa";
import Titan from "./pages/destination/titan/Titan";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";
import TechnologyLaunch from "./pages/technology/technologyLaunch/TechnologyLaunch";
import TechnologySpaceport from "./pages/technology/technologySpaceport/TechnologySpaceport";
import TechnologySpaceCapsule from "./pages/technology/technologySpaceCapsule/TechnologySpaceCapsule";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="destination" element={<Destination />}>
            <Route index element={<Moon />} />
            <Route path="mars" element={<Mars />} />
            <Route path="europa" element={<Europa />} />
            <Route path="titan" element={<Titan />} />
          </Route>

          <Route path="crew" element={<Crew />} />

          <Route path="technology" element={<Technology />} >
            <Route index element={<TechnologyLaunch />} />
            <Route path="spaceport" element={<TechnologySpaceport />} />
            <Route path="space-capsule" element={<TechnologySpaceCapsule />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
