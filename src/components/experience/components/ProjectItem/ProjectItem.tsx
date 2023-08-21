import classNames from "classnames";
import Arrow from "components/icons/Arrow";
import { TProject } from "types/components";

import styles from "./projectItem.module.scss";

interface IProjectItemProps {
  project: TProject;
  isActive: boolean;
  isFixed: boolean;
  isBottom: boolean;
}

const ProjectItem = ({
  project,
  isActive,
  isFixed,
  isBottom,
}: IProjectItemProps) => {
  const { id, link, title, description } = project;

  return (
    <div
      className={classNames([
        styles.project__section,
        {
          [styles.project__section_active]: isActive,
          [styles.project__section_fixed]: isFixed,
          [styles.project__section_bottom]: isBottom,
        },
      ])}
      key={id}
    >
      <div className={styles.project__section_content}>
        {link ? (
          <a
            className={styles.project__section_link}
            href={link}
            rel="noreferrer"
            target="_blank"
          >
            <span>{title}</span>
            <Arrow />
          </a>
        ) : (
          <div className={styles.project__section_title}>{title}</div>
        )}
        <div>{description}</div>
      </div>
    </div>
  );
};

export default ProjectItem;
