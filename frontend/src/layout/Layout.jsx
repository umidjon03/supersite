import cn from "classnames";

import { useMenu } from "../hooks/useMenu";

import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Menu } from "./Menu/Menu";

import styles from "./Layout.module.scss";

export const Layout = ({ children, className }) => {
  const { isOpen } = useMenu();

  return (
    <div className={cn(styles.layout, className)}>
      {isOpen && <Menu />}

      <Header className={cn(styles.header)} />

      <main className={cn(styles.main)}>{children}</main>

      <Footer className={cn(styles.footer)} />
    </div>
  );
};
