import cn from "classnames";

import { Container, Link } from "../../components";

import styles from "./Directions.module.scss";

export const Directions = ({ className, ...props }) => {
  return (
    <section className={cn(styles.directions, className)} {...props}>
      <Container className={cn(styles.directions__container)}>
        <h2 className={cn(styles.directions__heading)}>
          <span>Для кого </span>
          <span>наши </span>
          <span>предложения?</span>
        </h2>

        <div className={cn(styles.directions__inner)}>
          <Link className={cn(styles.direction)} href={"/#"} size="big">
            Госкорпорации и крупный бизнес
          </Link>
          <Link className={cn(styles.direction)} href={"/#"} size="big">
            Интернет-магазины
          </Link>
          <Link className={cn(styles.direction)} href={"/#"} size="big">
            Банки и финансовые операторы
          </Link>
          <Link className={cn(styles.direction)} href={"/#"} size="big">
            Строители и девелоперы
          </Link>
          <Link className={cn(styles.direction)} href={"/#"} size="big">
            Органы государственной власти
          </Link>
          <Link className={cn(styles.direction)} href={"/#"} size="big">
            Предприятия среднего бизнеса
          </Link>
          <Link className={cn(styles.direction)} href={"/#"} size="big">
            Предприятия культуры,
            <br />
            образования и здравоохранения
          </Link>
          <Link className={cn(styles.direction)} href={"/#"} size="big">
            Предприятия малого бизнеса
          </Link>
          <Link className={cn(styles.direction)} href={"/#"} size="big">
            Транспортные и логистические компании
          </Link>
          <Link className={cn(styles.direction)} href={"/#"} size="big">
            Гостиницы, кафе и рестораны (HoReCa)
          </Link>
        </div>
      </Container>
    </section>
  );
};
