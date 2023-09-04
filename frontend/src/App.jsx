import { Routes, Route } from "react-router-dom";

import { Layout } from "./layout/Layout";

import { Home } from "./pages/home";
import Portfolio from "./pages/portfolio";
import Marketing from "./pages/marketing";
import Blog from "./pages/blog";
import Audit from "./pages/audit";
import Contacts from "./pages/contacts";
import Qwiz1 from "./pages/qwiz1";
import Qwiz2 from "./pages/qwiz2";
import Qwiz3 from "./pages/qwiz3";
import Qwiz4 from "./pages/qwiz4";
import Qwiz5 from "./pages/qwiz5";
import Qwiz6 from "./pages/qwiz6";
import Qwiz7 from "./pages/qwiz7";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/portfolio/" element={<Portfolio />} />
        <Route path="/portfolio/:type" element={<Portfolio />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:type" element={<Blog />} />

        <Route path="/marketing" element={<Marketing />} />

        <Route path="/audit" element={<Audit />} />

        <Route path="/contacts" element={<Contacts />} />

        <Route path="/qwiz1" element={<Qwiz1 />} />
        <Route path="/qwiz2" element={<Qwiz2 />} />
        <Route path="/qwiz3" element={<Qwiz3 />} />
        <Route path="/qwiz4" element={<Qwiz4 />} />
        <Route path="/qwiz5" element={<Qwiz5 />} />
        <Route path="/qwiz6" element={<Qwiz6 />} />
        <Route path="/qwiz7" element={<Qwiz7 />} />
      </Routes>
    </Layout>
  );
};

export default App;
