import cn from "classnames";

import styles from "./Burger.module.scss";

export const Burger = ({ className, ...props }) => {
  return (
    <button className={cn(styles.burger, className)} {...props}>
      <span className={cn(styles.burger__text)}>Menu</span>

      <span className={cn(styles.burger__icon)}>
        <span className={cn(styles.burger__icon__line)}></span>
      </span>
    </button>
  );
};
