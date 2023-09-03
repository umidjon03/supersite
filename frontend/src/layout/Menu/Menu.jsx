import React from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";

import { Container } from "../../components";

import styles from "./Menu.module.scss";

export const Menu = () => {
  return (
    <div className={cn(styles.menu)}>
      <Container className={cn(styles.menu__container)}>
        <ul className={cn(styles.menu__list)}>
          <li className={cn(styles.menu__item)}>
            <NavLink
              className={({ isActive }) =>
                cn(styles.menu__link, {
                  [styles["menu__link--active"]]: isActive,
                })
              }
              to="/portfolio"
            >
              Портфолио
            </NavLink>
          </li>
          <li className={cn(styles.menu__item)}>
            <NavLink
              className={({ isActive }) =>
                cn(styles.menu__link, {
                  [styles["menu__link--active"]]: isActive,
                })
              }
              to="/blog"
            >
              Блог
            </NavLink>
          </li>
          <li className={cn(styles.menu__item)}>
            <NavLink
              className={({ isActive }) =>
                cn(styles.menu__link, {
                  [styles["menu__link--active"]]: isActive,
                })
              }
              to="/marketing"
            >
              О маркетинге
            </NavLink>
          </li>
        </ul>

        <ul className={cn(styles.menu__small)}>
          <li className={cn(styles.menu__item)}>
            <NavLink
              className={({ isActive }) =>
                cn(styles.menu__link, {
                  [styles["menu__link--active"]]: isActive,
                })
              }
              to="/audit"
            >
              Разбор сайта
            </NavLink>
          </li>
          <li className={cn(styles.menu__item)}>
            <NavLink
              className={({ isActive }) =>
                cn(styles.menu__link, {
                  [styles["menu__link--active"]]: isActive,
                })
              }
              to="/qwiz1"
            >
              Квиз на разработку
            </NavLink>
          </li>
          <li className={cn(styles.menu__item)}>
            <NavLink
              className={({ isActive }) =>
                cn(styles.menu__link, {
                  [styles["menu__link--active"]]: isActive,
                })
              }
              to="/contacts"
            >
              Контакты
            </NavLink>
          </li>
        </ul>

        <div className={cn(styles.menu__info)}>
          <span className={cn(styles.menu__info__link)}>
            <a href="tel:+70663641919">+7(066) 364 19 19</a>
            <span> / </span>
            <a href="mailto:info@DidgiKey">info@DidgiKey</a>
          </span>
        </div>
      </Container>
    </div>
  );
};
