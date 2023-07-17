import { Menu } from "antd";

import { useQuery } from "@shared/lib/hooks";

export const HomeMenu = ({ params }) => {
  let query = useQuery();

  let section = query.get("section");

  const menu = [
    {
      key: "welcome",
      label: "Привет",
      onClick: () => params.handleGoWelcomeScreen(),
    },
    {
      key: "home",
      label: "Главная",
      onClick: () => params.handleGoHomeScreen(),
    },
  ];

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[section ? section : "welcome"]}
      items={menu}
      style={{ heigth: 46, position: "sticky", top: 0, zIndex: 999999, width: "100%" }}
    />
  );
};
