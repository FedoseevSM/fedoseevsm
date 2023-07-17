import { Card } from "antd";

export const ScreenCard = ({ title, children }) => {
  return (
    <Card title={title} bordered={false}>
      {children}
    </Card>
  );
};
