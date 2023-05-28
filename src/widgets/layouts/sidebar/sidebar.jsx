import React from "react"
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
  let [loading, setLoading] = React.useState(false)
  let location = useLocation()
  const path = location.pathname

  const indexPage = pages.findIndex((page) => page.to === path)
  const pageUp = indexPage == 0 ? false : pages[indexPage - 1].to
  const pageDown = indexPage == 4 ? false : pages[indexPage + 1].to

  let scroller = React.useRef(null)
  let pageUpButton = React.useRef(null)
  let pageDownButton = React.useRef(null)

  React.useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      if (scroller.current) scroller.current.classList.add("glowing")
      if (pageUp && pageUpButton.current) pageUpButton.current.classList.remove("glowing")
      if (pageDown && pageDownButton.current) pageDownButton.current.classList.remove("glowing")
      setTimeout(() => {
        if (scroller.current) scroller.current.classList.remove("glowing")
      }, 3600, [])
    }, 3600, [])
  }, [])

  React.useEffect(() => {
    if (pageUp && pageDown && loading) {
      if (pageUpButton.current) pageUpButton.current.classList.remove("glowing")
      if (pageDownButton.current) pageDownButton.current.classList.remove("glowing")
    }
  }, [path])


  return (
    <div className="left-sidebar">
      {sidebar && <Sidebar />}
      <div className="scroller">
        <Button
          ref={scroller}
          type="text"
          icon={!sidebar ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => sidebarToggle()}
          style={{
            fontSize: '16px',
            width: "100%",
            height: 49,
            borderRadius: 0,
            border: 0
          }}
        />
        <div className="scroller__page">
          {pageUp && (
            <Nav to={pageUp} style={{ height: "100%" }}>
              <Button ref={pageUpButton} style={{ borderRadius: 0 }} type="text" className="scroller__btn glowing"><UpOutlined /></Button>
            </Nav>
          )}
          {pageDown && (
            <Nav to={pageDown} style={{ height: "100%" }}>
              <Button ref={pageDownButton} style={{ borderRadius: 0 }} type="text" className="scroller__btn glowing"><DownOutlined /></Button>
            </Nav>
          )}
        </div>
      </div>
      <div className="body" style={{ maxHeight: "100vh", overflow: "hidden" }}>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}
