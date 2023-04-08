import { Outlet, useLocation } from "react-router-dom"
import { Header, Sidebar } from "@widgets"

import { Nav } from "@shared/ui"
import { useBinaryState } from "@shared/lib/hooks"
import { pages } from "@shared/config"

import "./styles.css"

export const LeftSidebar = () => {
  const [sidebar, sidebarShow, sidebarClose] = useBinaryState(true)
  let location = useLocation()
  const path = location.pathname

  const indexPage = pages.findIndex((page) => page.to === path)
  const pageUp = indexPage == 0 ? false : pages[indexPage - 1].to
  const pageDown = indexPage == 4 ? false : pages[indexPage + 1].to

  return (
    <div className="left-sidebar">
      {sidebar && <Sidebar />}
      <div className="scroller">
        {sidebar && (
          <button onClick={sidebarClose} className="">
            Hide Sidebar
          </button>
        )}
        {!sidebar && (
          <button onClick={sidebarShow} className="">
            Show Sidebar
          </button>
        )}
        <div className="scroller__page">
          {pageUp && (
            <Nav to={pageUp} style={{ height: "100%" }}>
              <button className="scroller__btn">UP</button>
            </Nav>
          )}
          {pageDown && (
            <Nav to={pageDown} style={{ height: "100%" }}>
              <button className="scroller__btn">DOWN</button>
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
