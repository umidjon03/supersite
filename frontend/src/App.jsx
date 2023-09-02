import { Routes, Route } from "react-router-dom";

import { Layout } from "./layout/Layout";

import { Home } from "./pages/home";
import Portfolio from "./pages/portfolio";
import Marketing from "./pages/marketing";
import Blog from "./pages/blog";
import Audit from "./pages/audit";
import Contacts from "./pages/contacts";

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
      </Routes>
    </Layout>
  );
};

export default App;
