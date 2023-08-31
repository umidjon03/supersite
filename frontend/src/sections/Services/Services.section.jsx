import cn from "classnames";

import { Card, Container } from "../../components";

import { services } from "../../data/services";

import styles from "./Services.module.scss";

export const Services = ({ className, ...props }) => {
  return (
    <section className={cn(styles.services, className)} {...props}>
      <Container className={cn(styles.services__container)}>
        <h2 className={cn(styles.services__heading)}>Услуги</h2>

        <ul className={cn(styles.services__list)}>
          {!!services.length &&
            services.map((service, index) => (
              <li className={cn(styles.service)} key={index}>
                <Card className={cn(styles.service__card)}>
                  <h3 className={cn(styles.service__heading)}>
                    {service.title}
                  </h3>

                  <ul className={cn(styles.service__list)}>
                    {!!service.list.length &&
                      service.list.map((item, index) => (
                        <li
                          className={cn(styles.service__list__item)}
                          key={index}
                        >
                          {item}
                        </li>
                      ))}
                  </ul>
                </Card>
              </li>
            ))}
        </ul>
      </Container>
    </section>
  );
};
