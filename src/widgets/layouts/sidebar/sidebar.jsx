import { Outlet, useLocation } from "react-router-dom"
import { Header, Sidebar } from "@widgets"

import { Nav } from "@shared/ui"
import { useBinaryState } from "@shared/lib/hooks"
import { pages } from "@shared/config"

import { UpOutlined, DownOutlined } from "@ant-design/icons"

import { Button } from "antd"

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';

import "./styles.css"

export const LeftSidebar = () => {
  const [sidebar, sidebarShow, sidebarClose, sidebarToggle] = useBinaryState(true)
  let location = useLocation()
  const path = location.pathname

  const indexPage = pages.findIndex((page) => page.to === path)
  const pageUp = indexPage == 0 ? false : pages[indexPage - 1].to
  const pageDown = indexPage == 4 ? false : pages[indexPage + 1].to

  return (
    <div className="left-sidebar">
      {sidebar && <Sidebar />}
      <div className="scroller">
        <Button
          type="text"
          icon={!sidebar ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => sidebarToggle()}
          style={{
            fontSize: '16px',
            width: "100%",
            height: 46,
            borderRadius: 0
          }}
        />
        <div className="scroller__page">
          {pageUp && (
            <Nav to={pageUp} style={{ height: "100%" }}>
              <Button style={{ borderRadius: 0 }} type="text" className="scroller__btn"><UpOutlined /></Button>
            </Nav>
          )}
          {pageDown && (
            <Nav to={pageDown} style={{ height: "100%" }}>
              <Button style={{ borderRadius: 0 }} type="text" className="scroller__btn"><DownOutlined /></Button>
            </Nav>
          )}
        </div>
      </div>
      <div className="body">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}
