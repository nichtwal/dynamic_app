import React from "react";
import style from "./index.module.css";
import { image } from "../../../app/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const PortretBlock = () => {
  React.useEffect(() => {
    let startpoint,
    endpoint
    if (window.innerWidth < 600) {
      startpoint = 100
      endpoint = -50
    } else {
      startpoint = -50
      endpoint = -70
    }
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(`.${style.image2}`, {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${style.container}`,
          start: `-${startpoint + 100}% top`,
          end: `${window.innerWidth < 600 ? 80 : 0}% top`,
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
      start: `-${startpoint + 250}% top`,
      end: `-${endpoint + 70}% top`,
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
