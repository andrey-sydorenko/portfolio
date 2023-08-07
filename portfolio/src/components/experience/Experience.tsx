import { memo, useState, useRef, useEffect } from "react";
import classNames from "classnames";
import debounce from "lodash.debounce";
import ProjectsExperienceItem from "./components/ProjectsExperienceItem/ProjectsExperienceItem";
import { PROJECTS, PROJECTS_EXPERIENCE } from "../../mockData/data";
import { TProject } from "../../types/components";

import styles from "./experience.module.scss";

const Experience = () => {
  const [activeProject, setActiveProject] = useState<TProject>(PROJECTS[0]);
  const ref = useRef<HTMLDivElement | null>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const experienceList = document.querySelectorAll(
      "[data-id=experience-item]"
    );
    const lastItemHeight =
      experienceList[experienceList.length - 1].clientHeight;

    const handleScroll = () => {
      if (ref.current && ref.current.getBoundingClientRect().top <= 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      if (
        ref.current &&
        ref.current.getBoundingClientRect().bottom <= lastItemHeight
      ) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };

    const handleObserve = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        ref.current?.classList.add(styles.experience__leftSide_active);
      }
    };


    handleScroll();

    const observer = new IntersectionObserver(handleObserve);
    observer.observe(ref.current as Element);

    document.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const el = document.querySelector("#experience");

  const debounceSet = debounce((item: TProject) => {
    setActiveProject(item);
  }, 50);

  return (
    <div className={styles.experience}>
      <div
        style={{
          height: el?.clientHeight,
        }}
        ref={ref}
        className={styles.experience__leftSide}
      >
        {PROJECTS.map((item) => {
          const { title, description, logo: Logo, id } = item;
          const isActive = id === activeProject.id;
          return (
            <div
              className={classNames([
                styles.experience__section,
                {
                  [styles.experience__section_active]: isActive,
                  [styles.experience__section_fixed]: isFixed,
                  [styles.experience__section_bottom]: isBottom,
                },
              ])}
              key={id}
            >
              <div className={styles.experience__section_content}>
                <div className={styles.experience__section_title}>{title}</div>
                <div>{description}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div id="experience" className={styles.experience__rightSide}>
        {PROJECTS_EXPERIENCE.map((item) => {
          return (
            <ProjectsExperienceItem
              key={item.id}
              item={item}
              currentProject={activeProject}
              setActiveProject={debounceSet}
            />
          );
        })}
      </div>
    </div>
  );
};

export default memo(Experience);
