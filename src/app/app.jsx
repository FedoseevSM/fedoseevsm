import { HashRouter } from "react-router-dom"
import React from "react"

import { Routing } from "@pages"

import "./styles.css"

export const App = () => {
  return (
    <React.StrictMode>
      <React.Suspense>
        <HashRouter>
          <Routing />
        </HashRouter>
      </React.Suspense>
    </React.StrictMode>
  )
}
