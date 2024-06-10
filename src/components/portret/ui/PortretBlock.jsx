import React from "react";
import style from "./index.module.css";
import { image } from "../../../app/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const PortretBlock = () => {
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(`.${style.image2}`, {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${style.container}`,
          start: "-150% top",
          end: "top top",
          scrub: true,
        },
      })
      .to(`.${style.image2}`, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1,
      });
    const littleTicketAnimation = gsap.to(`.${style.ticket}`, {
      transform: "translate3d(0, 0 ,0) rotate(0deg)",
      opacity:1,
    });
    ScrollTrigger.create({
      trigger: `.${style.container}`,
      start: "-250% top",
      end: "-70% top",
      scrub: true,
      animation:littleTicketAnimation
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
