import cn from "classnames";

import { Container } from "../../components";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={cn(styles.header)}>
      <Container>Header</Container>
    </header>
  );
};
