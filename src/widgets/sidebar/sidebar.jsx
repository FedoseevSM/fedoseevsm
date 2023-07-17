import { Divider } from "antd";
import { SlideFrame, SidebarMenu, SidebarNavigation } from "@shared/ui";

import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <SlideFrame />
        <Divider />
        <SidebarMenu />
      </div>
      <div className="sidebar__footer">
        <SidebarNavigation />
      </div>
    </div>
  );
};
