import InteractiveCard from "./components/InteractiveCard";

import styles from "./about.module.scss";
import Input from "../shared/Input/Input";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about__line} />
      <div className={styles.about__contentWrapper}>
        <div style={{  marginBottom: 50 }}>
          <InteractiveCard />
        </div>
        <div>
          <Input />
        </div>
      </div>
      <div className={styles.about__line} />
    </div>
  );
};

export default About;
