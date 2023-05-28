import { useLocation } from "react-router-dom"

import { Nav, Slide } from "@shared/ui"
import { pages } from "@shared/config"

import "./styles.css"

export const Menu = () => {
  let location = useLocation()
  const path = location.pathname
  const activeSlide = { border: "3px solid #1677ff" }

  return (
    <div className="menu-container">
      <div className="menu">
        {pages.map((slide) => (
          <Nav key={slide.id} to={slide.to} style={{ display: "flex", gap: 5 }}>
            <p style={{ alignSelf: "end" }}>
              {slide.id + 1}.
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
  )
}
