import cn from "classnames";

import styles from "./Container.module.scss";

export const Container = ({ className, children, ...props }) => {
  return (
    <div className={cn(styles.container, className)} {...props}>
      {children}
    </div>
  );
};
