import React from "react";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { useMediaQuery } from "../../hooks/useMediaQuery";
import { getCustomers } from "../../api/customers";

import { Card, Container, SwiperButton } from "../../components";

import styles from "./Customers.module.scss";
import "swiper/scss";

export const Customers = () => {
  const [customers, setCustomers] = React.useState([]);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const isMobile = useMediaQuery("(max-width:768px)");

  React.useEffect(() => {
    (async () => {
      const { data: customers } = await getCustomers();

      if (customers) {
        setCustomers(customers);
      }
    })();
  }, []);

  return (
    <section className={cn(styles.customers)}>
      <Container className={cn(styles.customers__container)}>
        <h2 className={cn(styles.customers__heading)}>
          Клиенты <span>Didgikey</span>
        </h2>

        <div className={cn(styles.customers__navigation)}>
          <SwiperButton arrow="left" ref={navigationPrevRef} />
          <SwiperButton arrow="right" ref={navigationNextRef} />
        </div>

        <div className={cn(styles.customers__inner)}>
          <Swiper
            className={cn(styles.customers__swiper)}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            spaceBetween={isMobile ? 12 : 14}
            slidesPerView={isMobile ? 2 : "auto"}
            modules={[Navigation]}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            grabCursor
          >
            {!!customers.length &&
              customers.map((customer) => (
                <SwiperSlide
                  className={cn(styles.customers__swiper__slide)}
                  key={customer.id}
                >
                  <Card className={cn(styles.customer)}>
                    <div className={cn(styles.customer__inner)}>
                      <img
                        src={customer.photo}
                        alt={customer.name}
                        width={180}
                      />
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};
