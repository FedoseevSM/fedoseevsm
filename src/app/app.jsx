import React from "react"
import { HashRouter } from "react-router-dom"

import { Routing } from "@pages"

import './app.css'
import './reset.css'


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
