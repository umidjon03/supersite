import cn from "classnames";

import { Container } from "../../components";

import styles from "./Directions.module.scss";

export const Directions = ({ className, ...props }) => {
  return (
    <section className={cn(styles.directions, className)} {...props}>
      <Container>
        <div className={cn(styles.directions__top)}>
          <h2 className={cn(styles.directions__heading)}>
            Для кого наши предложения?
          </h2>

          <div></div>
        </div>
      </Container>
    </section>
  );
};
