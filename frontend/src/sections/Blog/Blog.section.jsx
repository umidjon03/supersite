import React from "react";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { useMediaQuery } from "../../hooks/useMediaQuery";
import { getArticles } from "../../api/blog";

import { ArticleCard, Container, SwiperButton } from "../../components";

import Card1 from "../../assets/images/imgcard1.png";

import styles from "./Blog.module.scss";

export const Blog = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const [articles, setArticles] = React.useState([]);

  const isTablet = useMediaQuery("(max-width:768px)");
  const isMobile = useMediaQuery("(max-width:550px)");

  React.useEffect(() => {
    (async () => {
      const { data: articles } = await getArticles();

      if (articles) {
        setArticles(articles);
      }
    })();
  }, []);

  return (
    <div className={cn(styles.blog)}>
      <Container className={cn(styles.blog__container)}>
        <h2 className={cn(styles.blog__heading)}>Последние статьи</h2>

        <div className={cn(styles.blog__navigation)}>
          <SwiperButton arrow="left" ref={navigationPrevRef} />
          <SwiperButton arrow="right" ref={navigationNextRef} />
        </div>

        <div className={cn(styles.blog__inner)}>
          <Swiper
            className={cn(styles.blog__swiper)}
            spaceBetween={isTablet ? 20 : 14}
            slidesPerView={isMobile ? 1 : isTablet ? 2 : "auto"}
            modules={[Navigation]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {articles.length &&
              articles.map((article) => (
                <SwiperSlide
                  className={cn(styles.blog__swiper__slide)}
                  key={article.id}
                >
                  <ArticleCard
                    img={article.photo}
                    date={article.date}
                    title={article.title}
                    description={article.info}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};
