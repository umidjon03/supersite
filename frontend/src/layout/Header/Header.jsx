import cn from "classnames";

import { Container, Burger } from "../../components";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

import styles from "./Header.module.scss";

export const Header = ({ className, ...props }) => {
  return (
    <header className={cn(styles.header, className)} {...props}>
      <Container className={cn(styles.header__container)}>
        <div className={cn(styles.header__logo)}>
          <Logo className={cn(styles.header__logo__icon)} />

          <span className={cn(styles.header__logo__text)}>
            <strong>Didgi</strong>Key
          </span>
        </div>

        <Burger />
      </Container>
    </header>
  );
};
