import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import debounce from "lodash.debounce";
import { TProject } from "../../../../types/components";
import { PROJECTS, PROJECTS_EXPERIENCE } from "../../../../mockData/data";

import styles from "./projectsExperienceItem.module.scss";

interface ProjectsExperienceItemProps {
  item: {
    title: string;
    id: number;
    parentId: number;
    technologies: { label: string; href: string }[];
    description: string;
  };
  setActiveProject: (a: TProject) => void;
  currentProject: TProject;
}

const ProjectsExperienceItem = ({
  item,
  setActiveProject,
  currentProject,
}: ProjectsExperienceItemProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { title, technologies, description, parentId, id } = item;

  const activeProject =
    PROJECTS.find(({ id }) => id === parentId) || PROJECTS[0];

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current && ref.current.getBoundingClientRect().top <= 100) {
        setActiveProject(activeProject);
      }
    };

    const handleObserve = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        ref.current?.classList.add(styles.experienceItem__activeItem);
      }
    };

    const observer = new IntersectionObserver(handleObserve);
    observer.observe(ref.current as Element);

    document.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      document.removeEventListener("scroll", handleScroll);
    };
  }, [activeProject, setActiveProject, item]);

  const isActive = currentProject.id === parentId;

  const handleClick = () => {
    const yOffset = -50;
    const y =
      (ref.current?.getBoundingClientRect().top || 0) +
      window.scrollY +
      yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveProject(activeProject);
  };

  return (
    <div
      onClick={handleClick}
      ref={ref}
      className={classNames([
        styles.experienceItem,
        { [styles.experienceItem__active]: isActive },
      ])}
    >
      <div className={styles.experienceItem__title}>{title}</div>
      <div className={styles.experienceItem__description}>{description}</div>
      <div className={styles.experienceItem__technologies}>
        {technologies.map((item) => {
          return (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={styles.experienceItem__technology}
              key={item.label}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsExperienceItem;
