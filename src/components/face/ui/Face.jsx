import React from "react";
import { image } from "../../../app/assets";
import style from "./index.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Face = () => {
  const textRef = React.useRef(null);

  React.useEffect(() => {
    let endAnimation,
    startAnimation
    if (window.innerWidth < 600) {
      startAnimation = '-150%'
      endAnimation = '-50%'
    } else {
      startAnimation = "-100%"
      endAnimation = '-20%'
    }
    gsap.registerPlugin(ScrollTrigger);
    const text = textRef.current.textContent;
    const letters = text.split("");
    // Очищаем текстовый узел и добавляем каждую букву в отдельный <span>
    textRef.current.innerHTML = '';
    letters.forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
    span.style.opacity = 0
      textRef.current.appendChild(span);
    })
    const spans = textRef.current.childNodes
    gsap.to(spans, {
      opacity: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: `.${style.container}`,
        start: `${startAnimation} top`,
        end: `${endAnimation} top`,
        scrub: true

      },
    });
    const mainImageAnimation = gsap.to(`.${style.roche}`, {
      transform: "rotate(-5deg)",
    });
    const opacityEyesLine = gsap.to(`.${style.paint}`, {
      opacity: 1,
    });
    const opacityMark = gsap.to(`.${style.mark}`, {
      opacity: 1,
    });
    ScrollTrigger.create({
      trigger: `.${style.container}`,
      start: "-100% top",
      end: `${endAnimation} top`,
      animation: mainImageAnimation,
      scrub: true,
    });
    ScrollTrigger.create({
      trigger: `.${style.container}`,
      start: `${startAnimation} top`,
      end: `${endAnimation} top`,
      animation: opacityEyesLine,
      scrub: true,
    });
    ScrollTrigger.create({
      trigger: `.${style.container}`,
      start: `${startAnimation} top`,
      end: `${endAnimation} top`,
      animation: opacityMark,
      scrub: true,
    });
  }, []);
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.roche}>
          <img src={image.roche} alt="" />
        </div>
        <div className={style.paint}>
          <img src={image.paint} alt="" />
        </div>
        <div className={style.mark}>
          <img src={image.mark} alt="" />
        </div>
        <p ref={textRef}>Madame Roche</p>
      </div>
    </div>
  );
};

export default Face;
