import { useLocation } from "react-router-dom";

import { Nav, Slide } from "@shared/ui";
import { pages } from "@shared/config";

import "./slide-frame.css";

export const SlideFrame = () => {
  let location = useLocation();
  const path = location.pathname;
  const activeSlide = { border: "3px solid #1677ff" };

  return (
    <div className="slide-frame__container">
    <div className="slide-frame">
      {pages.map((slide, index) => (
        <Nav key={slide.id} to={slide.to} style={{ display: "flex", gap: 5 }}>
          <p style={{ alignSelf: "end" }}>
            {index + 1}.
          </p>
          <div>
            <Slide style={path == slide.to ? activeSlide : {}}>
              {slide.title}
            </Slide>
          </div>
        </Nav>
      ))}
    </div>
  </div>
  );
};
