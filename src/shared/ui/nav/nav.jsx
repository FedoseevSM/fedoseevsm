import { useNavigate } from "react-router-dom"

import "./styles.css"

export const Nav = (params) => {
  const navigate = useNavigate()
  const toNavigate = () => navigate(params.to ? params.to : "#")
  return (
    <div onClick={toNavigate} className="nav" style={params.style}>
      {params.href && (
        <a href={params.href} target="_blank">
          {params.children}
        </a>
      )}
      {!params.href && params.children}
    </div>
  )
}
