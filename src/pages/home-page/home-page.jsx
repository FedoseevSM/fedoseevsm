import React from "react";
import { useNavigate } from "react-router-dom";

import { useQuery } from "@shared/lib/hooks";

import { Header, Body } from "@widgets";

import "./home-page.css";


export const HomePage = () => {
  let query = useQuery();
  const navigate = useNavigate();

  let section = query.get("section");

  const goToScreen = (className, section) => {
    document.querySelector(`.${className}`).scrollIntoView({
      behavior: "smooth",
      nearest: "block",
    });
    query.set("section", section);
    navigate(`/?${query.toString()}`);
  };

  const handleGoWelcomeScreen = () => {
    goToScreen("home-page", "welcome");
  };

  const handleGoHomeScreen = () => {
    goToScreen("home-screen", "home");
  };

  React.useEffect(() => {
    if (section) {
      if (section === "home") {
        return handleGoHomeScreen();
      }
    }
  }, []);

  const ScreenParams = {
    handleGoWelcomeScreen: handleGoWelcomeScreen,
    handleGoHomeScreen: handleGoHomeScreen,
  };

  return (
    <div className="home-page">
      <Header params={ScreenParams} />
      <Body params={ScreenParams} />
    </div>
  );
};
