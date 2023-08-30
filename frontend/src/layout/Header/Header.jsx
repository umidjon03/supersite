import cn from "classnames";
import { Link } from "react-router-dom";

import { useMenu } from "../../hooks/useMenu";

import { Container, Burger } from "../../components";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

import styles from "./Header.module.scss";

export const Header = ({ className, ...props }) => {
  const { isOpen, setIsOpen } = useMenu();

  return (
    <header
      className={cn(styles.header, className, {
        [styles["header--open"]]: isOpen,
      })}
      {...props}
    >
      <Container className={cn(styles.header__container)}>
        <Link className={cn(styles.header__logo)} to={"/"}>
          <Logo className={cn(styles.header__logo__icon)} />

          <span className={cn(styles.header__logo__text)}>
            <strong>Didgi</strong>Key
          </span>
        </Link>

        <Burger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </Container>
    </header>
  );
};
