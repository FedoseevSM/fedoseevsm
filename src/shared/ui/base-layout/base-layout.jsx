import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "@widgets";

import { pages } from "@shared/config";

import { Nav } from "@shared/ui";
import { useBinaryState } from "@shared/lib/hooks";

import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { BaseButton } from "@shared/ui";

import "./base-layout.css";

export const BaseLayout = () => {
  const [sidebar, sidebarShow, sidebarClose, sidebarToggle] =
    useBinaryState(true);
  let [loading, setLoading] = React.useState(false);

  let location = useLocation();
  const path = location.pathname;

  const indexPage = pages.findIndex((page) => page.to === path);
  const pageUp = indexPage == 0 ? false : pages[indexPage - 1].to;
  const pageDown =
    indexPage == pages.length - 1 ? false : pages[indexPage + 1].to;

  let scroller = React.useRef(null);
  let pageUpButton = React.useRef(null);
  let pageDownButton = React.useRef(null);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(
      () => {
        if (scroller.current) {
          scroller.current.classList.add("glowing");
        }
        if (pageUp && pageUpButton.current)
          pageUpButton.current.classList.remove("glowing");
        if (pageDown && pageDownButton.current)
          pageDownButton.current.classList.remove("glowing");
        setTimeout(
          () => {
            if (scroller.current) scroller.current.classList.remove("glowing");
            sidebarClose();
          },
          3600,
          []
        );
      },
      3600,
      []
    );
  }, []);

  React.useEffect(() => {
    if ((pageUp && loading) || (pageDown && loading)) {
      if (pageUpButton.current)
        pageUpButton.current.classList.remove("glowing");
      if (pageDownButton.current)
        pageDownButton.current.classList.remove("glowing");
    }
  }, [path]);
  return (
    <div className="left-sidebar">
      {sidebar && <Sidebar />}
      <div className="scroller">
        <div ref={scroller}>
          <BaseButton
            icon={sidebar ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            type="text"
            onClick={() => sidebarToggle()}
            style={{
              fontSize: "16px",
              width: "100%",
              height: 46,
              borderRadius: 0,
              border: 0,
            }}
          />
        </div>
        <div className="scroller__page">
          {pageUp && (
            <Nav to={pageUp} style={{ height: "100%" }}>
              <Button
                icon={<UpOutlined />}
                type="text"
                ref={pageUpButton}
                style={{ borderRadius: 0, width: "100%" }}
                className="scroller__btn glowing"
              />
            </Nav>
          )}
          {pageDown && (
            <Nav to={pageDown} style={{ height: "100%" }}>
              <Button
                icon={<DownOutlined />}
                type="text"
                ref={pageDownButton}
                style={{ borderRadius: 0, width: "100%" }}
                className="scroller__btn glowing"
              />
            </Nav>
          )}
        </div>
      </div>
      <div className="body" style={{ maxHeight: "100vh", overflow: "hidden" }}>
        <Outlet />
      </div>
    </div>
  );
};
