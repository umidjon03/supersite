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

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/" element={<Portfolio />} />
        <Route path="/portfolio/:type" element={<Portfolio />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/audit" element={<Audit />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/qwiz1" element={<Qwiz1 />} />
        <Route path="/qwiz2" element={<Qwiz2 />} />
      </Routes>
    </Layout>
  );
};

export default App;
