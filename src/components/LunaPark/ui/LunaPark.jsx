import React from "react";
import style from "./index.module.css";
import { image } from "../../../app/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const LunaPark = () => {
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const photoAnimation = gsap.to(`.${style.photo}`, {
      transform:'translate3d(0px, 0px, 0px)',
      opacity:1,
    })
    const ticketAnimation = gsap.to(`.${style.ticket}`, {
      transform:'translate3d(0px, 0px, 0px)',
      opacity:1,
    })
    ScrollTrigger.create({
      trigger: `.${style.container}`,
      start: "-200% top",
      end: "-20% top",
      animation: photoAnimation,
      scrub: true,
    })
    ScrollTrigger.create({
      trigger: `.${style.container}`,
      start: "-200% top",
      end: "-20% top",
      animation: ticketAnimation,
      scrub: true,
    })
  }, []);
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.photo}>
          <img src={image.team} alt="" />
        </div>
        <div className={style.ticket}>
          <img src={image.luna_park} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LunaPark;
