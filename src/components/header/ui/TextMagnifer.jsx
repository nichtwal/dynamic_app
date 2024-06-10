import React, { useState } from "react";
import "./index.css";

const TextMagnifier = () => {
  const [windowState, setWindowState] = React.useState(true);
  React.useEffect(() => {
    if (window.innerWidth < 1010) {
      setWindowState(false);
    }
  }, []);
  const text =
    "В старый особняк на Кожевнической 16c4 обычно заезжали гости со всего света. Зная секретный код +7 999 2102222, распрастранявшийся через местных пьяниц, каждый из них попадал в тайную команту…";
  const textObject = (text) => {
    const words = text.split(" ");
    const keywords = ["Кожевнической", "16c4", "+7", "999", "2102222,"];
    const result = [];
    words.forEach((word, index) => {
      if (keywords.includes(word)) {
        if (keywords.slice(0, 2).includes(word)) {
          result.push({ id: index + 1, value: word + " ", class: "address" });
        } else {
          result.push({ id: index + 1, value: word + " ", class: "number" });
        }
      } else {
        result.push({ id: index + 1, value: word + " ", class: "text" });
      }
    });
    return result;
  };
  const [hoverElement, setHoverElement] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (el) => {
    setHoverElement(el);
  };

  const handleMouseLeave = () => {
    setHoverElement(null);
  };

  const handleMouseMove = (e) => {
    const { left, top } = e.target.getBoundingClientRect();
    setCursorPosition({
      x: left,
      y: top * 2,
    });
  };

  return (
    <header className="text-container" onMouseMove={handleMouseMove}>
      <div className="text-wrapper">
        {textObject(text).map((word) =>
          windowState ? (
            <span
              key={word.id}
              className={"text-item_" + word.class}
              onMouseEnter={() => handleMouseEnter(word)}
              onMouseLeave={handleMouseLeave}
            >
              {word.value}
            </span>
          ) : (
            <span key={word.id} className={"text-item_" + word.class}>
              {word.value}
            </span>
          )
        )}
      </div>
      {hoverElement !== null && (
        <div
          className="magnifier"
          style={{
            top: cursorPosition.y - 50,
            left: cursorPosition.x - 50,
          }}
        >
          <span className={"magnified-text_" + hoverElement.class}>
            {hoverElement.value.includes(",") ||
            hoverElement.value.includes(".")
              ? hoverElement.value.replace(/[,.]/g, "")
              : hoverElement.value}
          </span>
        </div>
      )}
    </header>
  );
};

export default TextMagnifier;
