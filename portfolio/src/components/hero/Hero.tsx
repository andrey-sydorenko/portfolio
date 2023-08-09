import { useEffect, useRef, memo } from "react";
import CssIcon from "../icons/Css";
import JsIcon from "../icons/Js";
import HtmlIcon from "../icons/Html";
import SassIcon from "../icons/Sass";
import ReactIcon from "../icons/React";
import GithubIcon from "../icons/Github";
import NodeJsIcon from "../icons/NodeJs";
import VueIcon from "../icons/Vue";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./hero.module.scss";

const settings = {
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  speed: 2000,
  autoplaySpeed: 2000,
  pauseOnHover: false,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

const Hero = () => {
  const nameRef = useRef<HTMLDivElement | null>(null);
  const positionRef = useRef<HTMLDivElement | null>(null);
  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const photoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleObserve = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        photoRef.current?.classList.add(styles.hero__photo_active);
        nameRef.current?.classList.add(styles.hero__name_active);
        positionRef.current?.classList.add(styles.hero__position_active);
        descriptionRef.current?.classList.add(styles.hero__description_active);
      }
    };

    const observer = new IntersectionObserver(handleObserve);

    observer.observe(nameRef.current as Element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.hero__line} />
      <div className={styles.hero__wrapper}>
        <div className={styles.hero__content}>
          <img
            ref={photoRef}
            alt="profilePhoto"
            src="/template.png"
            className={styles.hero__photo}
          />
          <div>
            <div ref={nameRef} className={styles.hero__name}>
              Andrii <br /> Sydorenko
            </div>
            <div ref={positionRef} className={styles.hero__position}>
              Front-end developer
            </div>
            <div ref={descriptionRef} className={styles.hero__description}>
              My journey from a beginner to this stage has equipped me with a
              deep understanding of HTML, CSS, and JavaScript, allowing me to
              transform design concepts into interactive web applications.
            </div>
          </div>
        </div>
        <video className={styles.hero__block} autoPlay loop muted>
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className={styles.hero__circle}>
          <div className={styles.hero__circle_item}>
            <HtmlIcon />
          </div>
          <div className={styles.hero__circle_item}>
            <CssIcon />
          </div>
          <div className={styles.hero__circle_item}>
            <JsIcon />
          </div>
          <div className={styles.hero__circle_item}>
            <SassIcon />
          </div>
          <div className={styles.hero__circle_item}>
            <ReactIcon />
          </div>
          <div className={styles.hero__circle_item}>
            <GithubIcon />
          </div>
          <div className={styles.hero__circle_item}>
            <NodeJsIcon />
          </div>
          <div className={styles.hero__circle_item}>
            <VueIcon />
          </div>
          <div className={styles.hero__circle_item}>
            <SassIcon />
          </div>
        </div>
      </div>
      <div className={styles.hero__sliderWrapper}>
        <Slider {...settings}>
          <div className={styles.hero__icon}>
            <HtmlIcon />
          </div>
          <div className={styles.hero__icon}>
            <CssIcon />
          </div>
          <div className={styles.hero__icon}>
            <JsIcon />
          </div>
          <div className={styles.hero__icon}>
            <SassIcon />
          </div>
          <div className={styles.hero__icon}>
            <ReactIcon />
          </div>
          <div className={styles.hero__icon}>
            <GithubIcon />
          </div>
          <div className={styles.hero__icon}>
            <NodeJsIcon />
          </div>
          <div className={styles.hero__icon}>
            <VueIcon />
          </div>
          <div className={styles.hero__icon}>
            <SassIcon />
          </div>
        </Slider>
      </div>
      <div className={styles.hero__line} />
    </div>
  );
};

export default memo(Hero);
