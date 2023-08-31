import { Routes, Route } from "react-router-dom";

import { Layout } from "./layout/Layout";

import { Home } from "./pages/home";
import Portfolio from "./pages/portfolio";
import Marketing from "./pages/marketing";
import Blog from "./pages/blog";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Layout>
  );
};

export default App;
