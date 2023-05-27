import { Menu } from "antd"

import { Statistics, Welcome } from "@widgets"

const menu = [
  {
    key: 0,
    label: "Привет"
  },
  {
    key: 1,
    label: "GitHub"
  }
]

export const HomePage = () => {
  return (
    <div style={{ backgroundColor: "#cecece", height: "10009px" }}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['0']}
        items={menu}
        style={{ height: 46, position: "sticky", top: 0, zIndex: 999999 }}
      />
        <Welcome />
      <div style={{ margin: 30, backgroundColor: "#fff" }}>
        <Statistics />
      </div>
    </div>
  )
}
