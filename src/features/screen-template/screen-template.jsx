import { Tooltip } from "antd"
import { DownCircleOutlined } from "@ant-design/icons"

import "./screen-template.css"

export const ScreenTemplate = ({ children, handleGoDown, tooltip, style }) => {
  return (
    <section className="screen-template" style={style}>
      {children}
      {handleGoDown && <Tooltip title={tooltip}>
        <DownCircleOutlined
          style={{ fontSize: 36 }}
          className="bounce"
          onClick={handleGoDown}
        />
      </Tooltip>}
    </section>
  );
};
