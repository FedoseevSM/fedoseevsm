import { Col, Row } from "antd";

import { ScreenCard } from "@entities/screen";
import { ScreenTemplate } from "@features";

export const AboutScreen = () => {
  return (
    <div className="about-screen">
      <ScreenTemplate>
        <Row gutter={16}>
          <Col span={8}>
            <ScreenCard title="ScreenCard title">ScreenCard content</ScreenCard>
          </Col>
          <Col span={8}>
            <ScreenCard title="ScreenCard title">ScreenCard content</ScreenCard>
          </Col>
          <Col span={8}>
            <ScreenCard title="ScreenCard title">ScreenCard content</ScreenCard>
          </Col>
        </Row>
      </ScreenTemplate>
    </div>
  );
};
