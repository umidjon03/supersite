import cn from "classnames";

import styles from "./Card.module.scss";

export const Card = ({ className, children, ...props }) => {
  return (
    <div className={cn(styles.card, className)} {...props}>
      {children}
    </div>
  );
};
