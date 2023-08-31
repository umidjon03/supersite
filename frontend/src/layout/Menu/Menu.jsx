import cn from "classnames";

// import { useMenu } from "../../hooks/useMenu";

import { Container } from "../../components";

import styles from "./Menu.module.scss";

export const Menu = () => {
  // const { isOpen } = useMenu();

  return (
    <div className={cn(styles.menu)}>
      <Container>Menu</Container>
    </div>
  );
};
