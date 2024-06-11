import React from "react";
import style from "./index.module.css";
import { image } from "../../../app/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const StyledText = () => {
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
      endFirstAnimation = "-10% top";
      startSecondAnimation = "-100% top";
      endSecondAnimation = "-50% top";
      startThirdAnimation = "-100% top";
      endThirdAnimation = "-50% top";
      startFourthAnimation = "-100% top";
      endFourthAnimation = "-50% top";
    } else if (window.innerWidth > 1400) {
      startFirstAnimation = "-50% top";
      endFirstAnimation = "20% top";
      startSecondAnimation = "-20% top";
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
      startFirstAnimation = "-100% top";
      endFirstAnimation = "top top";
      startSecondAnimation = "-100% top";
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
        trigger: `.${style.text_wrapper}`,
        start: startFirstAnimation,
        end: endFirstAnimation,
        scrub: true,
      },
    });
   const symbol_first =  gsap.to(`.${style.side_first}`,{
    opacity:1,
    transform: 'translateY(0)',
   })
   const symbol_last =  gsap.to(`.${style.side_last}`,{
    opacity:1,
    transform: 'translateY(0)',
   })
   const symbol_top =  gsap.to(`.${style.main_symbol}`,{
    transform: 'translateY(0)',
    opacity:1
   })
   ScrollTrigger.create({
    trigger: `.${style.symbol_wrapper}`,
    start: startSecondAnimation,
    end: endSecondAnimation,
    animation: symbol_top,
    scrub: true,
   })
   ScrollTrigger.create({
    trigger: `.${style.symbol_wrapper}`,
    start: startThirdAnimation,
    end: endThirdAnimation,
    animation: symbol_first,
    scrub: true,
   })
   ScrollTrigger.create({
    trigger: `.${style.symbol_wrapper}`,
    start: startFourthAnimation,
    end: endFourthAnimation,
    animation: symbol_last,
    scrub: true,
   })
  }, []);
  return (
    <div className={style.container}>
      <div className={style.text_wrapper}>
        <p ref={textRef}>
          The guest house of the mysterious Asian woman in the heart of the
          Eurasian world
        </p>
        <div className={style.symbol_wrapper}>
          <div className={style.main_symbol}>
            <img src={image.symbol_left} alt="" />
          </div>
          <div className={style.side_symbold}>
            <div className={style.side_first}>
              <img src={image.symbol_top} alt="" />
            </div>
            <div className={style.side_last}>
              <img src={image.symbol_bottom} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyledText;
