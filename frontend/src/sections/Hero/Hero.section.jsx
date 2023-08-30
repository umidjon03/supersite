import React from "react";
import cn from "classnames";

import { Button, Container, Switch } from "../../components";

import BulbOff from "../../assets/images/bulb-off.png";
import BulbOn from "../../assets/images/bulb-on.png";

import styles from "./Hero.module.scss";

export const Hero = () => {
  const [isActive, setActive] = React.useState(false);

  return (
    <section className={cn(styles.hero)}>
      <Container className={cn(styles.hero__container)}>
        <div className={cn(styles.hero__inner)}>
          <div className={cn(styles.hero__info)}>
            <h1 className={cn(styles.hero__heading)}>
              Digital агенство полного цикла
            </h1>

            <h2 className={cn(styles.hero__subheading)}>
              Проектируем и воплощаем эффектные цифровые стратегии
            </h2>

            <p className={cn(styles.hero__description)}>
              Задача организации, в особенности же рамки и место обучения кадров
              представляет собой интересный эксперимент проверки систем
              массового участия.
            </p>

            <Button className={cn(styles.hero__button)}>
              Связаться с нами
            </Button>
          </div>

          <Switch
            className={cn(styles.hero__switch)}
            isActive={isActive}
            onClick={() => setActive(!isActive)}
          />
        </div>

        <div
          className={cn(styles.hero__image)}
          onClick={() => setActive(!isActive)}
        >
          <img src={isActive ? BulbOn : BulbOff} alt="bulb" />
        </div>
      </Container>
    </section>
  );
};
