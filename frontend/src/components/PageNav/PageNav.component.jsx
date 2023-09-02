import cn from "classnames";

import { Link } from "../Link/Link.component";

import styles from "./PageNav.module.scss";

export const PageNav = ({ className, menus }) => {
  return (
    <ul className={cn(styles.nav, className)}>
      {!!menus.length &&
        menus.map((menu, index) => (
          <li className={cn(styles.nav__item)} key={index}>
            <Link
              count={menu.count}
              isActive={menu.active}
              dot={menu.active && "primary"}
              href={menu.href}
            >
              {menu.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};
