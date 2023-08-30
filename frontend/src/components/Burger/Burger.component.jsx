import cn from "classnames";

import { ReactComponent as Close } from "../../assets/icons/close.svg";

import styles from "./Burger.module.scss";

export const Burger = ({ className, isOpen, ...props }) => {
  return (
    <button className={cn(styles.burger, className)} {...props}>
      <span className={cn(styles.burger__text)}>Menu</span>

      <span className={cn(styles.burger__status)}>
        {!isOpen ? (
          <span className={cn(styles.burger__icon)}>
            <span className={cn(styles.burger__icon__line)}></span>
          </span>
        ) : (
          <Close className={cn(styles.burger__close)} />
        )}
      </span>
    </button>
  );
};
