import React from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import {Layout, Row, Col, Steps, Image} from "antd";
import {CaretLeftOutlined} from "@ant-design/icons";
import schedule from '../../../../datasources/2023-jeju/schedule.json';

import "./Schedule.scss"

const {Header, Content} = Layout

function Schedule() {
    const navigate = useNavigate()
    const [params] = useSearchParams();

    const today = params.get('date')
    // @ts-ignore
    const parsedSchedules = schedule[today]

    return (
        <Layout className={"schedule"}>
            <Header className={"header"}>
                <h1>
                    <span onClick={() => navigate(-1)}><CaretLeftOutlined/></span>
                    <span>{params.get('date')} 여행일정</span>
                </h1>
            </Header>
            <Content className={"content"}>
                {
                    params.get('date') === '2023-07-15' ?
                        <Row justify={"center"} align={"middle"}>
                            <Image
                                width={800}
                                src={'https://leessony-1312916878.cos.ap-seoul.myqcloud.com/images/tour/2023-07-15%20ticket.png'}
                                alt={""}/>
                        </Row> : ''
                }
                <Row justify={"center"} align={"middle"}>
                    {
                        parsedSchedules.map((schedule: any, idx: number) => {
                            schedule = schedule.map((item: any) => {
                                return {
                                    ...item,
                                    description: <ul>
                                        <li>{item.description}</li>
                                        {item.move_method ? <li><a href={item.move_method}>이동방법</a></li> :
                                            <span></span>}
                                    </ul>
                                }
                            })
                            return (
                                <Col key={idx} span={8} className={'col'}>
                                    <h2>플랜 {idx + 1}</h2>
                                    <Steps
                                        className={"step"}
                                        direction="vertical"
                                        size="small"
                                        current={-1}
                                        items={schedule}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Content>
        </Layout>
    )
}

export default Schedule;