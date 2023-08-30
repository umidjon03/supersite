import cn from "classnames";

import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

import styles from "./Layout.module.scss";

export const Layout = ({ children, className }) => {
  return (
    <div className={cn(styles.layout, className)}>
      <Header className={cn(styles.header)} />

      <main className={cn(styles.main)}>{children}</main>

      <Footer className={cn(styles.footer)} />
    </div>
  );
};
