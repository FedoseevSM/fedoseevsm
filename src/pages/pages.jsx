import { Route, Routes } from "react-router-dom"

import { BaseLayout } from "@shared/ui"

import {
  HomePage,
  AboutPage,
  Error404Page,
} from "@pages"


export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<Error404Page />} />
      </Route>
    </Routes>
  )
}
