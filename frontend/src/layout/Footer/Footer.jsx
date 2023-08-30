import cn from "classnames";

import { Container } from "../../components";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={cn(styles.footer)}>
      <Container>footer</Container>
    </footer>
  );
};
