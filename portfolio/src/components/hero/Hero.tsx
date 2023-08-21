import { useEffect, useRef, memo } from "react";

import CssIcon from "components/icons/Css";
import JsIcon from "components/icons/Js";
import HtmlIcon from "components/icons/Html";
import SassIcon from "components/icons/Sass";
import ReactIcon from "components/icons/React";
import GithubIcon from "components/icons/Github";
import NodeJsIcon from "components/icons/NodeJs";
import VueIcon from "components/icons/Vue";
import TypescriptIcon from "components/icons/Typescript";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./hero.module.scss";

const TECHNOLOGIES = [
  { id: 1, Icon: CssIcon },
  { id: 2, Icon: JsIcon },
  { id: 3, Icon: HtmlIcon },
  { id: 4, Icon: SassIcon },
  { id: 5, Icon: ReactIcon },
  { id: 6, Icon: GithubIcon },
  { id: 7, Icon: NodeJsIcon },
  { id: 8, Icon: VueIcon },
  { id: 8, Icon: TypescriptIcon },
];

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
            src="/photo.png"
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
          {TECHNOLOGIES.map(({ id, Icon }) => {
            return (
              <div key={id} className={styles.hero__circle_item}>
                <Icon />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.hero__sliderWrapper}>
        <Slider {...settings}>
          {TECHNOLOGIES.map(({ id, Icon }) => {
            return (
              <div key={id} className={styles.hero__icon}>
                <Icon />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className={styles.hero__line} />
    </div>
  );
};

export default memo(Hero);
