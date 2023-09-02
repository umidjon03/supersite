import React from "react";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { Container, PageNav, Project, SwiperButton } from "../../components";

import styles from "./Portfolio.module.scss";
import "swiper/scss";

export const Portfolio = ({ className, ...props }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <section className={cn(styles.portfolio, className)} {...props}>
      <Container>
        <div className={cn(styles.portfolio__top)}>
          <h2 className={cn(styles.portfolio__heading)}>Портфолио</h2>

          <PageNav
            menus={[
              { title: "Все", count: 1534 },
              { title: "Интернет-магазины", count: 72 },
              { title: "Landing pages", count: 350 },
              { title: "Корпоративные сайты", count: 22 },
            ]}
          />
        </div>

        <div className={cn(styles.portfolio__info)}>
          <Swiper
            className={cn(styles.portfolio__swiper)}
            slidesPerView={1}
            spaceBetween={50}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            modules={[Navigation]}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            grabCursor
          >
            <SwiperSlide>
              <Project
                type={"Интернет-магазин"}
                title={"Double B"}
                description={
                  "Задача организации, в особенности же рамки и место обучения кадров представляет собой интересный эксперимент проверки систем массового участия. "
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Project
                type={"Интернет-магазин"}
                title={"Double B"}
                description={
                  "Задача организации, в особенности же рамки и место обучения кадров представляет собой интересный эксперимент проверки систем массового участия. "
                }
              />
            </SwiperSlide>
          </Swiper>

          <div className={cn(styles.portfolio__navigation)}>
            <SwiperButton arrow="left" ref={navigationPrevRef} />
            <SwiperButton arrow="right" ref={navigationNextRef} />
          </div>
        </div>
      </Container>
    </section>
  );
};
