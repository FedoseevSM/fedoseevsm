import React from "react";
import Splitting from "splitting";

import { ScreenTemplate } from "@features";

import "./welcome-screen.css";

export const WelcomeScreen = ({ params }) => {
  let splitting = React.useRef(null);

  React.useEffect(() => {
    if (splitting.current)
      Splitting({ target: splitting.current, by: "chars" });
  }, []);
  return (
    <div className="welcome-screen">
      <ScreenTemplate tooltip="Главная" handleGoDown={params.handleGoHomeScreen} style={{height: "calc(100vh - 46px)"}}>
        <div ref={splitting} class="without" data-splitting>
          Привет, я Веб-разработчик
        </div>
      </ScreenTemplate>
    </div>
  );
};
