import { Divider, MainLogo, Nav } from "@shared/ui"

import { Button, Space } from 'antd';

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
        <Space
          direction="vertical"
          style={{
            width: '100%',
          }}>
          <Nav href="https://github.com/FedoseevSM">
            <Button type="primary" block>
              GitHub
            </Button>
          </Nav>
        </Space>
      </div>
    </div>
  )
}
