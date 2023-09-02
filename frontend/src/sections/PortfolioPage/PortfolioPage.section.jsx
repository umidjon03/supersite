import React from "react";
import { useParams } from "react-router-dom";
import cn from "classnames";

import { getPortfolio, getTypes } from "../../api/portfolio";
import { projectTypes } from "../../helpers/projectType.helper";

import { Container, PageNav, Project } from "../../components";

import styles from "./PortfolioPage.module.scss";

export const PortfolioPage = () => {
  const [projects, setProjects] = React.useState([]);
  const [filteredProjects, setFilteredProjects] = React.useState(projects);
  const [typeNav, setTypeNav] = React.useState([]);

  const { type } = useParams();

  React.useState(() => {
    (async () => {
      const { data: portfolio } = await getPortfolio();
      const { data: numbers } = await getTypes();

      if (portfolio) {
        setProjects(portfolio);
        setFilteredProjects(portfolio);
      }
      if (numbers) {
        const keys = Object.keys(numbers);

        const array = keys.map((key) => {
          return {
            type: key,
            title: projectTypes[key].many,
            count: numbers[key],
            href: `/portfolio${key !== "all" ? `/${key}` : ""}`,
            active: !type ? (key === "all" ? true : false) : type === key,
          };
        });

        setTypeNav(array);
      }
    })();
  }, []);

  React.useEffect(() => {
    if (!type) return setFilteredProjects(projects);

    setFilteredProjects(projects.filter((project) => project.type === type));
  }, [type, projects]);

  React.useEffect(() => {
    const array = typeNav.map((item) => {
      if (item.type === type) item.active = true;
      else if (!type && item.type === "all") item.active = true;
      else item.active = false;

      return item;
    });

    setTypeNav(array);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return (
    <section className={cn(styles.portfolio)}>
      <div className={cn(styles.portfolio__top)}>
        <Container className={cn(styles.portfolio__top__container)}>
          <h2 className={cn(styles.portfolio__heading)}>Портфолио</h2>

          <PageNav className={cn(styles.portfolio__nav)} menus={typeNav} />
        </Container>
      </div>

      <ul
        className={cn(styles.filteredProjects, {
          [styles["projects--2n"]]: filteredProjects.length % 2 === 0,
        })}
      >
        {!!filteredProjects.length &&
          filteredProjects.map((project, index) => (
            <li className={cn(styles.project)} key={project.id}>
              <Container>
                <Project
                  type={project.type}
                  title={project.title}
                  description={project.info}
                  image={project.photo}
                  reverse={index % 2 !== 0}
                />
              </Container>
            </li>
          ))}
      </ul>
    </section>
  );
};
