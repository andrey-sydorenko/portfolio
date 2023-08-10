import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import ArrowSecondary from "components/icons/ArrowSecondary";
import Arrow from "components/icons/Arrow";

import { TProject } from "types/components";
import { PROJECTS } from "mockData/data";

import styles from "./projectsExperienceItem.module.scss";

interface ProjectsExperienceItemProps {
  item: {
    title: string;
    id: number;
    parentId: number;
    technologies: { label: string; href: string }[];
    description: string;
    date: {
      start: string;
      end: string;
    };
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
  const projectWrapperRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { title, technologies, description, parentId, date } = item;

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

    if (window.innerWidth >= 991) {
      document.addEventListener("scroll", handleScroll);
    }

    return () => {
      observer.disconnect();
      document.removeEventListener("scroll", handleScroll);
    };
  }, [activeProject, setActiveProject, item]);

  const isActive = currentProject.id === parentId;

  const toggleProject = () => {
    setIsOpen((prev) => {
      const elHeight = (projectRef.current?.clientHeight || 0) + 15;
      if (projectWrapperRef.current) {
        projectWrapperRef.current.style.height = !prev
          ? `${elHeight}px` || "0px"
          : "0px";
      }
      return !prev;
    });
  };

  const handleClick = () => {
    if (window.innerWidth <= 991) {
      return;
    }

    const yOffset = -50;
    const y =
      (ref.current?.getBoundingClientRect().top || 0) +
      window.scrollY +
      yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveProject(activeProject);
  };

  const expandTitle = isOpen
    ? "Hide project description"
    : "Show project description";

  return (
    <div
      data-id="experience-item"
      onClick={handleClick}
      ref={ref}
      className={classNames([
        styles.experienceItem,
        { [styles.experienceItem__active]: isActive },
      ])}
    >
      <div className={styles.experienceItem__title}>{title}</div>
      <div className={styles.experienceItem__date}>
        {date.start} - {date.end}
      </div>
      <div className={styles.experienceItem__description}>{description}</div>
      <div
        onClick={toggleProject}
        className={classNames([
          styles.experienceItem__expandBtn,
          { [styles.experienceItem__expandBtn_active]: isOpen },
        ])}
      >
        <span>{expandTitle}</span>
        <ArrowSecondary />
      </div>
      <div
        ref={projectWrapperRef}
        className={styles.experienceItem__projectWrapper}
      >
        <div ref={projectRef} className={styles.experienceItem__project}>
          <div className={styles.experienceItem__project_content}>
            {activeProject.link ? (
              <a
                className={styles.experienceItem__project_link}
                href={activeProject.link}
                rel="noreferrer"
                target="_blank"
              >
                <span>{activeProject.title}</span>
                <Arrow />
              </a>
            ) : (
              <div className={styles.experienceItem__project_title}>
                {activeProject.title}
              </div>
            )}
            <div>{activeProject.description}</div>
          </div>
        </div>
      </div>

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
