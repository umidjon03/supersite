import cn from "classnames";

import { Container } from "../../components";

import styles from "./Portfolio.module.scss";

export const Portfolio = ({ className, ...props }) => {
  return (
    <section className={cn(styles.portfolio, className)} {...props}>
      <Container>
        <div className={cn(styles.portfolio__top)}>
          <h2 className={cn(styles.portfolio__heading)}>Портфолио</h2>

          <div></div>
        </div>
      </Container>
    </section>
  );
};
