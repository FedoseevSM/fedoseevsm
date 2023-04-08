import { useNavigate } from "react-router-dom"

import "./styles.css"

export const Nav = (params) => {
  const navigate = useNavigate()
  const goNavigate = () => navigate(params.to ? params.to : "#")
  return (
    <div onClick={goNavigate} className="nav" style={params.style}>
      {params.href && (
        <a href={params.href} target="_blank">
          {params.children}
        </a>
      )}
      {!params.href && params.children}
    </div>
  )
}
