import React from "react";
import style from "./index.module.css";
import { image } from "../../../app/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const PortretBlock = () => {
  React.useEffect(() => {
    let endFirstAnimation,
      startFirstAnimation,
      endSecondAnimation,
      startSecondAnimation;
    if (window.innerWidth > 1600) {
      startFirstAnimation = "-100% top";
      endFirstAnimation = "-10% top";
      startSecondAnimation = "-100% top";
      endSecondAnimation = "-50% top";
    } else if (window.innerWidth > 1400) {
      startFirstAnimation = "-50% top";
      endFirstAnimation = "20% top";
      startSecondAnimation = "-20% top";
      endSecondAnimation = "10% top";
    } else if (window.innerWidth > 715) {
      startFirstAnimation = "-50% top";
      endFirstAnimation = "top top";
      startSecondAnimation = "-50% top";
      endSecondAnimation = "10% top";
    } else if (window.innerWidth < 450) {
      startFirstAnimation = "-100% top";
      endFirstAnimation = "top top";
      startSecondAnimation = "-100% top";
      endSecondAnimation = "10% top";
    }
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(`.${style.image2}`, {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${style.container}`,
          start: startFirstAnimation,
          end: endFirstAnimation,
          scrub: true,
        },
      })
      .to(`.${style.image2}`, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1,
      });
    const littleTicketAnimation = gsap.to(`.${style.ticket}`, {
      transform: "translate3d(0, 0 ,0) rotate(0deg)",
      opacity: 1,
    });
    ScrollTrigger.create({
      trigger: `.${style.container}`,
      start: startSecondAnimation,
      end: endSecondAnimation,
      scrub: true,
      animation: littleTicketAnimation,
    });
  }, []);
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.portret_container}>
          <img className={style.image1} src={image.portret} alt="" />
          <img className={style.image2} src={image.navy_portret} alt="" />
        </div>
        <div className={style.ticket}>
          <img src={image.ticket} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PortretBlock;
