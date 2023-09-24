import { useLocation } from "react-router-dom";

import { HomeMenu } from "./index.js";

export const Header = ({params}) => {
  let location = useLocation();
  const path = location.pathname.split("/");

    if (path.includes("about")) {
    }

  return (
      <HomeMenu params={params} />
  );
};
