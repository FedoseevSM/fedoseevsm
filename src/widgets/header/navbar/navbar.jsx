// import { Menu } from "antd"

import "./styles.css"

export const Navbar = () => {
    return (
        <div className="navbar">
            {/* <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={new Array(3).fill(null).map((_, index) => ({
                    key: String(index + 1),
                    label: `nav ${index + 1}`,
                }))}
            /> */}
        </div>
    )
}

export const NavbarMobile = () => {
    return (
        <div className="navbar-mobile">
            Header -&gt; Navbar Mobile
        </div>
    )
}