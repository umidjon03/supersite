import cn from "classnames";

import styles from "./Button.module.scss";

export const Button = ({ className, children, ...props }) => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
};
