import cn from "classnames";

import { Link } from "../Link/Link.component";

import styles from "./PageNav.module.scss";

export const PageNav = ({ menus }) => {
  return (
    <ul className={cn(styles.nav)}>
      {!!menus.length &&
        menus.map((menu, i) => (
          <li className={cn(styles.nav__item)} key={i}>
            <Link
              count={menu.count}
              isActive={i === 0 && true}
              dot={i === 0 && "primary"}
            >
              {menu.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};
