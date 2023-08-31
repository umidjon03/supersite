import React from "react";

import BlogTop from "../sections/BlogTop/BlogTop";
import { Container } from "../components";
import ArticleCards from "../sections/ArticleCards/ArticleCards";

function Blog() {
  return (
    <Container>
      <BlogTop />
      <ArticleCards />
    </Container>
  );
}

export default Blog;
