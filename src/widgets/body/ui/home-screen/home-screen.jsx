import React from "react";

import { ScreenTemplate } from "@features";

export const HomeScreen = () => {
  return (
    <div className="home-screen">
      <ScreenTemplate  style={{height: "calc(100vh - 46px)"}}>Домашняя страница</ScreenTemplate>
    </div>
  );
};
