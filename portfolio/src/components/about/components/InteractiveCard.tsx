import { useCallback, useRef, useState, useMemo, memo } from "react";
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
        <div className={styles.interactiveCard__text}>Hire me!</div>
        <div className={styles.interactiveCard__text}>
          If you want to hire me, please submit the form below
        </div>
        <div className={styles.interactiveCard__text}>
          For more information visit my social networks:
        </div>
      </div>
    </div>
  );
};

export default memo(InteractiveCard);
