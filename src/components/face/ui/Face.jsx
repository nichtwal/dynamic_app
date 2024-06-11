import React from "react";
import { image } from "../../../app/assets";
import style from "./index.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Face = () => {
  const textRef = React.useRef(null);

  React.useEffect(() => {
    let endFirstAnimation,
      startFirstAnimation,
      endSecondAnimation,
      startSecondAnimation,
      endThirdAnimation,
      startThirdAnimation,
      startFourthAnimation,
      endFourthAnimation;
    if (window.innerWidth > 1600) {
      startFirstAnimation = "-100% top";
      endFirstAnimation = "-50% top";
      startSecondAnimation = "-100% top";
      endSecondAnimation = "-50% top";
      startThirdAnimation = "-100% top";
      endThirdAnimation = "-50% top";
      startFourthAnimation = "-100% top";
      endFourthAnimation = "-50% top";
    } else if (window.innerWidth > 1400) {
      startFirstAnimation = "-100% top";
      endFirstAnimation = "top top";
      startSecondAnimation = "-50% top";
      endSecondAnimation = "10% top";
      startThirdAnimation = "-20% top";
      endThirdAnimation = "10% top";
      startFourthAnimation = "-30% top";
      endFourthAnimation = "10% top";
    } else if (window.innerWidth > 715) {
      startFirstAnimation = "-50% top";
      endFirstAnimation = "top top";
      startSecondAnimation = "-50% top";
      endSecondAnimation = "10% top";
      startThirdAnimation = "top top";
      endThirdAnimation = "40% top";
      startFourthAnimation = "-20% top";
      endFourthAnimation = "40% top";
    } else if (window.innerWidth < 450 ) {
      startFirstAnimation = "-50% top";
      endFirstAnimation = "top top";
      startSecondAnimation = "-50% top";
      endSecondAnimation = "10% top";
      startThirdAnimation = "top top";
      endThirdAnimation = "40% top";
      startFourthAnimation = "-20% top";
      endFourthAnimation = "40% top";
    }
    gsap.registerPlugin(ScrollTrigger);
    const text = textRef.current.textContent;
    const letters = text.split("");
    // Очищаем текстовый узел и добавляем каждую букву в отдельный <span>
    textRef.current.innerHTML = "";
    letters.forEach((letter, index) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.opacity = 0;
      textRef.current.appendChild(span);
    });
    const spans = textRef.current.childNodes;
    gsap.to(spans, {
      opacity: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: `.${style.container}`,
        start: startFourthAnimation,
        end: endFourthAnimation,
        scrub: true,
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
      start: startFirstAnimation,
      end: endFirstAnimation,
      animation: mainImageAnimation,
      scrub: true,
    });
    ScrollTrigger.create({
      trigger: `.${style.container}`,
      start: startSecondAnimation,
      end: endSecondAnimation,
      animation: opacityEyesLine,
      scrub: true,
    });
    ScrollTrigger.create({
      trigger: `.${style.container}`,
      start: startThirdAnimation,
      end: endThirdAnimation,
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
