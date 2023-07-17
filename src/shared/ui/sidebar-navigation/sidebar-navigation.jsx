import { Nav } from "@shared/ui"

import { Button, Space } from 'antd';

export const SidebarNavigation = () => {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
    >
      <Nav href="https://github.com/FedoseevSM">
        <Button type="primary" block>
          GitHub
        </Button>
      </Nav>
    </Space>
  );
};
