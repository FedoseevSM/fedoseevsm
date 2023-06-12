import React from "react"
import Splitting from "splitting"

import { Card, Col, Row } from 'antd';

import "./styles.css"

export const PartnersScreen = () => {
    let splitting = React.useRef(null)
    React.useEffect(() => {
        if (splitting.current) Splitting({ target: splitting.current, by: 'chars' })
    }, [])
    return (
        <div className="partners-screen">
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="Card title" bordered={false}>
                        Card content
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Card title" bordered={false}>
                        Card content
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Card title" bordered={false}>
                        Card content
                    </Card>
                </Col>
            </Row>
        </div>
    )
}