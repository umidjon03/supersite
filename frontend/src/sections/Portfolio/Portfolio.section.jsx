import React from "react";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { getPortfolio, getTypes } from "../../api/portfolio";
import { projectTypes } from "../../helpers/projectType.helper";

import { Container, PageNav, Project, SwiperButton } from "../../components";

import styles from "./Portfolio.module.scss";
import "swiper/scss";

export const Portfolio = ({ className, ...props }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const [projects, setProjects] = React.useState([]);
  const [typeNav, setTypeNav] = React.useState([]);

  React.useState(() => {
    (async () => {
      const { data: portfolio } = await getPortfolio();
      const { data: numbers } = await getTypes();

      if (portfolio) {
        setProjects(portfolio);
      }
      if (numbers) {
        const keys = Object.keys(numbers);

        const array = keys.map((key) => {
          return {
            title: projectTypes[key].many,
            count: numbers[key],
            href: `/portfolio${key !== "all" ? `/${key}` : ""}`,
          };
        });

        setTypeNav(array);
      }
    })();
  }, []);

  return (
    <section className={cn(styles.portfolio, className)} {...props}>
      <Container>
        <div className={cn(styles.portfolio__top)}>
          <h2 className={cn(styles.portfolio__heading)}>Портфолио</h2>

          <PageNav menus={typeNav} />
        </div>

        <div className={cn(styles.portfolio__info)}>
          <Swiper
            className={cn(styles.portfolio__swiper)}
            slidesPerView={"auto"}
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
            {!!projects.length &&
              projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <Project
                    type={project.type}
                    title={project.title}
                    description={project.info}
                    image={project.photo}
                    withNav
                  />
                </SwiperSlide>
              ))}
            {/* <SwiperSlide>
              <Project
                type={"internet_store"}
                title={"Double B"}
                description={
                  "Задача организации, в особенности же рамки и место обучения кадров представляет собой интересный эксперимент проверки систем массового участия. "
                }
                image={"df"}
                withNav
              />
            </SwiperSlide> */}
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
