import { Link } from "react-router-dom";
import cn from "classnames";

import { Container } from "../../components";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={cn(styles.footer)}>
      <Container className={cn(styles.footer__container)}>
        <div className={cn(styles.footer__left)}>
          <Link className={cn(styles.footer__logo)} to={"/"}>
            <Logo className={cn(styles.footer__logo__icon)} />

            <span className={cn(styles.footer__logo__text)}>
              <strong>Didgi</strong>Key
            </span>
          </Link>

          <span className={cn(styles.footer__left__text)}>
            Digital агенство полного цикла
          </span>
        </div>

        <div className={cn(styles.footer__right)}>
          <span>
            © 1999-{new Date().getFullYear()} Интернет-компания{" "}
            <strong>DidgiKey</strong>
          </span>
          <span>Информация на сайте не является публичной офертой</span>
          <span>Актуальные цены уточняйте у менеджеров</span>
        </div>
      </Container>
    </footer>
  );
};
