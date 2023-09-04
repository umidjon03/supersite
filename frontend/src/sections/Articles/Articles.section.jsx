import React from "react";
import cn from "classnames";
import { useParams } from "react-router-dom";

import { getArticles } from "../../api/blog";
import { articleType } from "../../helpers/articleType.helper";

import { ArticleCard, Container, PageNav } from "../../components";

import styles from "./Articles.module.scss";

export const Articles = () => {
  const [articles, setArticles] = React.useState([]);
  const [filteredArticles, setFilteredArticles] = React.useState(articles);
  const [typeNav, setTypeNav] = React.useState([]);

  const { type } = useParams();

  React.useEffect(() => {
    (async () => {
      const { data } = await getArticles();

      if (data) {
        setArticles(data);
      }
    })();
  }, []);

  React.useEffect(() => {
    if (articles.length) {
      const keys = [...new Set(articles.map((item) => item.type))];

      const array = keys.map((key) => {
        return {
          type: key,
          title: articleType[key],
          count: articles.filter((item) => item.type === key).length,
          href: `/blog${key !== "all" ? `/${key}` : ""}`,
          active: !type ? (key === "all" ? true : false) : type === key,
        };
      });

      array.unshift({
        active: !type ? true : false,
        count: 3,
        href: "/blog",
        title: articleType["all"],
        type: "all",
      });

      setTypeNav(array);
    }

    if (!type) return setFilteredArticles(articles);

    setFilteredArticles(articles.filter((project) => project.type === type));
  }, [type, articles]);

  return (
    <section className={cn(styles.articles)}>
      <Container className={cn(styles.articles__container)}>
        <div className={cn(styles.articles__top)}>
          <h2 className={cn(styles.articles__heading)}>Блог</h2>

          <PageNav className={cn(styles.articles__nav)} menus={typeNav} />
        </div>

        <ul className={cn(styles.articles__list)}>
          {!!filteredArticles.length &&
            filteredArticles.map((article) => (
              <li className={cn(styles.article)} key={article.id}>
                <ArticleCard
                  img={article.photo}
                  date={article.date}
                  title={article.title}
                  description={article.info}
                />
              </li>
            ))}
        </ul>
      </Container>
    </section>
  );
};
