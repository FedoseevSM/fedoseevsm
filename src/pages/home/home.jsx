import { Menu } from "antd"

import { Game } from "@widgets"
import { Statistics } from "@widgets"

export const HomePage = () => {
  return (
    <div style={{backgroundColor: "#cecece", height: "100%"}}>
       <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={new Array(3).fill(null).map((_, index) => ({
                  key: String(index + 1),
                  label: `nav ${index + 1}`,
                }))}
            />
                <div style={{margin: 30, backgroundColor: "#fff"}}>
      <Game />
      <Statistics />
    </div>
    </div>
  )
}
