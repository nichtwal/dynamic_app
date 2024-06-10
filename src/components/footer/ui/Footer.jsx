import React from "react";
import style from "./index.module.css";
import gsap from 'gsap';
const Footer = () => {
  const textRef = React.useRef(null);
  React.useEffect(() => {
    const text = textRef.current.textContent;
    const letters = text.split("");
    textRef.current.innerHTML = letters
      .map((letter) => `<span>${letter}</span>`)
      .join("");

    const spans = textRef.current.querySelectorAll("span");

    gsap.fromTo(
      spans,
      {
        color: "#B04A4A",
      },
      {
        color: "#A6A6A6",
        stagger: {
          each: 0.1,
          repeat: -1,
          yoyo: true,
        },
      }
    );
  }, []);
  return (
    <footer className={style.footer}>
      <div className={style.text} ref={textRef}>
        <p>Основное меню представлено актуальным и авторским comfort-food</p>
      </div>
      <div className={style.links}>
        <a target="_blank" href="https://t.me/hukutoxic">
          Telegram
        </a>
        <a target="_blank" href="https://t.me/hukutoxic">
          Whatsapp
        </a>
      </div>
    </footer>
  );
};

export default Footer;
