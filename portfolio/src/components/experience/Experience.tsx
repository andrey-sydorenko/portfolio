import { memo, useState, useRef, useEffect } from "react";
import classNames from "classnames";
import debounce from "lodash.debounce";

import Arrow from "components/icons/Arrow";
import ProjectsExperienceItem from "./components/ProjectsExperienceItem/ProjectsExperienceItem";
import { PROJECTS, PROJECTS_EXPERIENCE } from "mockData/data";
import { TProject } from "types/components";

import styles from "./experience.module.scss";
import ProjectItem from "./components/ProjectItem/ProjectItem";

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

    handleScroll();
    document.addEventListener("scroll", handleScroll);

    return () => {
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
          const { id } = item;
          const isActive = id === activeProject.id;

          return (
            <ProjectItem
              key={id}
              project={item}
              isActive={isActive}
              isFixed={isFixed}
              isBottom={isBottom}
            />
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
