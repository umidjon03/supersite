import React from "react";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { Card, Container, SwiperButton } from "../../components";

import CustomerImage from "../../assets/images/customer.svg";

import styles from "./Customers.module.scss";
import "swiper/scss";
import "swiper/scss/navigation";

export const Customers = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <section className={cn(styles.customers)}>
      <Container className={cn(styles.customers__container)}>
        <div className={cn(styles.customers__top)}>
          <h2 className={cn(styles.customers__heading)}>
            Клиенты <span>Didgikey</span>
          </h2>

          <div className={cn(styles.customers__navigation)}>
            <SwiperButton arrow="left" ref={navigationPrevRef} />
            <SwiperButton arrow="right" ref={navigationNextRef} />
          </div>
        </div>

        <div className={cn(styles.customers__inner)}>
          <Swiper
            className={cn(styles.customers__swiper)}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            spaceBetween={14}
            slidesPerView={4}
            modules={[Navigation]}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            grabCursor
          >
            <SwiperSlide className={cn(styles.customers__swiper__slide)}>
              <Card className={cn(styles.customer)}>
                <img src={CustomerImage} alt="" width={180} />
              </Card>
            </SwiperSlide>

            <SwiperSlide className={cn(styles.customers__swiper__slide)}>
              <Card className={cn(styles.customer)}>
                <img src={CustomerImage} alt="" width={180} />
              </Card>
            </SwiperSlide>

            <SwiperSlide className={cn(styles.customers__swiper__slide)}>
              <Card className={cn(styles.customer)}>
                <img src={CustomerImage} alt="" width={180} />
              </Card>
            </SwiperSlide>

            <SwiperSlide className={cn(styles.customers__swiper__slide)}>
              <Card className={cn(styles.customer)}>
                <img src={CustomerImage} alt="" width={180} />
              </Card>
            </SwiperSlide>

            <SwiperSlide className={cn(styles.customers__swiper__slide)}>
              <Card className={cn(styles.customer)}>
                <img src={CustomerImage} alt="" width={180} />
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </section>
  );
};
