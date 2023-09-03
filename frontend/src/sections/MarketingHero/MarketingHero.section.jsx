import React from "react";
import cn from "classnames";

import { Container, Button } from "../../components";

import HeroImage from "../../assets/images/marketing-hero.png";

import styles from "./MarketingHero.module.scss";

export const MarketingHero = () => {
  return (
    <section className={cn(styles.hero)}>
      <Container className={cn(styles.hero__container)}>
        <div className={cn(styles.hero__info)}>
          <h2 className={cn(styles.hero__heading)}>
            <small>PERFORMANCE MARKETING</small>
            <strong>Попадем в цель?</strong>
          </h2>

          <p className={cn(styles.hero__description)}>
            Мы понимаем, что для успешного продвижения в интернет-среде
            требуется комплексный подход. Для каждого клиента мы подбираем
            инструменты исходя из особенностей его бизнеса.
          </p>

          <Button className={cn(styles.hero__button)}>Заказать услуги</Button>
        </div>

        <div className={cn(styles.hero__image)}>
          <img src={HeroImage} alt="hero" width={783} height={528} />
        </div>
      </Container>
    </section>
  );
};
