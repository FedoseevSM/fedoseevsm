import { Divider, MainLogo, Button, Nav } from "@shared/ui"

import { Menu } from "./ui/menu/index.js"
import { SubMenu } from "./ui/submenu/index.js"

import "./styles.css"


export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <MainLogo />
        <Menu />
        <Divider />
        <SubMenu />
      </div>
      <div className="sidebar-bottom">
        <Button variant="empty-btn">
          <Nav href="http://t.me/qwerty">Telegram Bot</Nav>
        </Button>
        <Button>
          <Nav href="http://t.me/qwerty">Telegram Group</Nav>
        </Button>
      </div>
    </div>
  )
}
