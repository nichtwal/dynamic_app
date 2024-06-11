import React from "react";
import style from "./index.module.css";
import { image } from "../../../app/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const StyledText = () => {
  const textRef = React.useRef(null);
  React.useEffect(() => {
    let endpoint,
    startpoint
    if (window.innerWidth < 600) {
      startpoint = '-300%'
      endpoint = '-30%'
    } else {
      startpoint = '-100%'
      endpoint = '40%'
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
        start: `${startpoint} top`,
        end: `${endpoint} top`,
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
    start: `${startpoint} top`,
    end: "20% top",
    animation: symbol_top,
    scrub: true,
   })
   ScrollTrigger.create({
    trigger: `.${style.symbol_wrapper}`,
    start: `${startpoint} top`,
    end: "20% top",
    animation: symbol_first,
    scrub: true,
   })
   ScrollTrigger.create({
    trigger: `.${style.symbol_wrapper}`,
    start: `${startpoint} top`,
    end: "70% top",
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
