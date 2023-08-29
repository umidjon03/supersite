import cn from "classnames";

import { Button, Container } from "../../components";

import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={cn(styles.hero)}>
      <Container className={cn(styles.hero__container)}>
        <h1 className={cn(styles.hero__heading)}>
          Digital агенство полного цикла
        </h1>

        <h2 className={cn(styles.hero__subheading)}>
          Проектируем и воплощаем эффектные цифровые стратегии
        </h2>

        <p className={cn(styles.hero__description)}>
          Задача организации, в особенности же рамки и место обучения кадров
          представляет собой интересный эксперимент проверки систем массового
          участия.
        </p>

        <Button className={cn(styles.hero__button)}>Связаться с нами</Button>
      </Container>
    </section>
  );
};
