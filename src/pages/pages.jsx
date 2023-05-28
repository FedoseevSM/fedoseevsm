import { Route, Routes } from "react-router-dom"

import { BaseLayout } from "@shared/ui"

import {
  HomePage,
  FaqPage,
  WinGoPage,
  DailyWheelPage,
  ActivityPage,
  Error404Page,
} from "@pages"

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/win-go" element={<WinGoPage />} />
        <Route path="/daily-wheel" element={<DailyWheelPage />} />
        <Route path="/activity" element={<ActivityPage />} />
      </Route>
      <Route path="*" element={<Error404Page />} />
    </Routes>
  )
}
