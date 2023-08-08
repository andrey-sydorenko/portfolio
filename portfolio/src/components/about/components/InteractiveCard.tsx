import classNames from "classnames";
import { useCallback, useRef, useState, useMemo, memo } from "react";
import { SOCIAL_NETWORKS } from "../../../mockData/data";
import styles from "./interactiveCard.module.scss";

const DEG_BIAS = 40;
const Z_TRANSLATE = -5;

const InteractiveCard = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0, z: 0 });

  const boxStyle = useMemo(() => {
    const { x, y, z } = boxPosition;
    const result = {
      transform: `rotateY(${x}deg) rotateX(${y}deg) translateY(${z}px)`,
    };
    return result;
  }, [boxPosition]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const x = DEG_BIAS * ((e.clientX - rect.left) / rect.width - 0.5);
      const y = -(DEG_BIAS * ((e.clientY - rect.top) / rect.height - 0.5));
      setBoxPosition(() => ({ x, y, z: Z_TRANSLATE }));
    }
  }, []);

  return (
    <div
      className={styles.interactiveCard__wrapper}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setBoxPosition({ x: 0, y: 0, z: 0 })}
    >
      <div style={boxStyle} className={styles.interactiveCard}>
        <div className={styles.interactiveCard__contentWrapper}>
          <div>
            <div className={styles.interactiveCard__text}>Hire me!</div>
            <div className={styles.interactiveCard__text}>
              Let's collaborate to achieve outstanding results together. 🚀
              Connect with me today!
            </div>
            <div className={styles.interactiveCard__text}>
              To contact me please submit the form below.
            </div>
          </div>
          <div className={styles.interactiveCard__centerText}>
            <div
              className={classNames([
                styles.interactiveCard__text,
                styles.interactiveCard__text_small,
              ])}
            >
              My social networks:
            </div>
            {SOCIAL_NETWORKS.map((item) => {
              const { id, href, Icon } = item;
              return (
                <a
                  className={styles.interactiveCard__link}
                  key={id}
                  href={href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(InteractiveCard);
