import React from "react";
import "./index.css";
import gsap from "gsap";
const TextBlock = ({ text, className = "" }) => {
  const paragraphRef = React.useRef(null);
  React.useEffect(() => {
    let startpoint,
    endpoint
    if (window.innerWidth < 600) {
      startpoint = 200
      endpoint = 20
    } else {
      startpoint = 150
      endpoint = 0
    }
    const oddP = document.querySelectorAll(
      `.description-container${className} .odd`
    );
    const evenP = document.querySelectorAll(
      `.description-container${className} .even`
    );
    gsap.to(oddP, {
      transform: "translateX(0)",
      opacity: 1,
      stagger: 0.000001,
      scrollTrigger: {
        trigger: `.description-container${className}`,
        start: className !== "" ?  `-${startpoint * 3}% top` : `-${startpoint}% top`,
        end: className !== "" ? `-${endpoint +150}% top` : `-${endpoint +50}% top`,
        scrub: true,
      },
    });
    gsap.to(evenP, {
      transform: "translateX(0)",
      opacity: 1,
      stagger: 0.000001,
      scrollTrigger: {
        trigger: `.description-container${className}`,
        start: className !== "" ?  `-${startpoint * 3}% top` : `-${startpoint}% top`,
        end: className !== "" ? `-${endpoint +50}% top` : `-${endpoint +50}% top`,
        scrub: true,
      },
    });
  }, []);
  return (
    <div className={"description-container" + className}>
      <div className="description-wrapper">
        {text.map((el) => (
          <div key={el.id} ref={paragraphRef}>
            {el.value.map((text) => (
              <p className={text.class} key={text.id}>
                {text.text}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextBlock;
