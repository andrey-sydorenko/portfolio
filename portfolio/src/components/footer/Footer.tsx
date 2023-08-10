import copy from "copy-to-clipboard";
import { useRef, useState } from "react";
import Arrow from "../icons/Arrow";
import Button from "../shared/Button/Button";

import styles from "./footer.module.scss";

const EMAIL = "rey.nko07@gmail.com";

const Footer = () => {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef<any>(0);

  const handleCopy = () => {
    clearTimeout(timeoutRef.current);
    copy(EMAIL);
    setIsCopied(true);

    timeoutRef.current = setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  const buttonLabel = isCopied ? "Copied!" : "Click to copy";

  return (
    <div className={styles.footer}>
      <div onClick={handleCopy} className={styles.footer__mail}>
        {EMAIL}
      </div>
      <Button onClick={handleCopy} label={buttonLabel} />

      <a
        className={styles.footer__resumeLink}
        href="/AS-CV.pdf"
        rel="noreferrer"
        target="_blank"
      >
        <span>View full resume</span>
        <Arrow />
      </a>
    </div>
  );
};

export default Footer;
