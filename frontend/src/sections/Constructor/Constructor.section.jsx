import { useNavigate } from "react-router-dom";
import cn from "classnames";

import { Container, Button } from "../../components";

import Wireframe from "../../assets/images/wireframe.jpg";
import EndProduct from "../../assets/images/end-product.jpg";

import { ReactComponent as Arrow } from "../../assets/icons/button-arrow.svg";

import styles from "./Constructor.module.scss";

export const Constructor = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    return navigate("/qwiz1");
  };

  return (
    <section className={cn(styles.constructor)}>
      <Container className={cn(styles.constructor__container)}>
        <div className={cn(styles.constructor__left)}>
          <span>От наброска / Wireframe'а</span>

          <div className={cn(styles.constructor__image)}>
            <img
              className={cn(styles.constructor__image__wireframe)}
              src={Wireframe}
              alt=""
            />
            <img
              className={cn(styles.constructor__image__product)}
              src={EndProduct}
              alt=""
            />
          </div>

          <span>До готового проекта!</span>
        </div>

        <div className={cn(styles.constructor__info)}>
          <h3 className={cn(styles.constructor__title)}>
            Воплоти проект в реальность!
          </h3>

          <p className={cn(styles.constructor__description)}>
            Расскажите о проекте вкратце и другие слова офера
          </p>

          <Button
            className={cn(styles.constructor__button)}
            onClick={handleNavigate}
          >
            <span>Начать</span>
            <Arrow />
          </Button>
        </div>
      </Container>
    </section>
  );
};
