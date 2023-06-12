import React from "react"
import { Menu, Tooltip } from "antd"
import { useNavigate } from "react-router-dom";
import { useQuery } from "@shared/lib/hooks"

import "./styles.css"

import { SkillsScreen, PartnersScreen } from "@widgets"
import { DownCircleOutlined } from "@ant-design/icons"

export const ActivityPage = () => {
  let query = useQuery();
  const navigate = useNavigate();

  let section = query.get("section")

  let screenWelcome = React.useRef(null)
  let screenSkills = React.useRef(null)

  const handleWelcome = () => {
    screenWelcome.current.scrollIntoView({
      behavior: "smooth",
      nearest: "block"
    });
    query.set("section", "welcome")
    navigate(`/?${query.toString()}`)
  }

  const handleSkills = () => {
    screenSkills.current.scrollIntoView({
      behavior: "smooth",
      nearest: "block"
    });
    query.set("section", "skills")
    navigate(`/?${query.toString()}`)
  }

  React.useEffect(() => {
    if (section) {
      if (screenWelcome.current && section === "welcome") {
        return handleWelcome()
      }
      if (screenSkills.current && section === "skills") {
        return handleSkills()
      }
    }
    return
  }, [])


  const menu = [
    {
      key: "welcome",
      label: "Партнеры",
      onClick: () => handleWelcome()
    },
    {
      key: "skills",
      label: "Портфолио",
      onClick: () => handleSkills()
    }
  ]
  return (
    <div style={{ backgroundColor: "#cecece" }} ref={screenWelcome} >
      {/* <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[section ? section : "welcome"]}
        items={menu}
        style={{ height: 46, position: "sticky", top: 0, zIndex: 999999 }}
      /> */}
      <section className="screen" style={{ height: "100vh" }}>
        <PartnersScreen />
      </section>
    </div>
  )
}
