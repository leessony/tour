import React from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import {Layout, Row, Col, Steps, Image, Collapse} from "antd";
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
                        <Row justify={"center"} align={"middle"} className={'notice'}>
                            <Col xs={{span: 24}} lg={{span: 12}}>
                                <Collapse
                                    size="small"
                                    items={[{
                                        key: '1',
                                        label: '비행키 티켓정보',
                                        children: <Image
                                            src={'https://leessony-1312916878.cos.ap-seoul.myqcloud.com/images/tour/2023-07-15%20ticket.png'}
                                            alt={""}/>
                                    }]}
                                />
                            </Col>
                        </Row> :
                        (params.get('date') === '2023-07-16' || params.get('date') === '2023-07-17') ?
                            <Row justify={"center"} align={"middle"} className={'notice'}>
                                <Col xs={{span: 24}} lg={{span: 12}}>
                                    <Collapse
                                        size="small"
                                        items={[
                                            {
                                                key: '1',
                                                label: '중문관광단지 소개',
                                                children:
                                                    <iframe
                                                        className={"view"}
                                                        title={"중문관광단지"}
                                                        src="https://korean.visitkorea.or.kr/detail/rem_detail.do?cotid=8359cae7-44d6-4b1c-9a12-c3cfcd1d5b78"/>
                                            },
                                            {
                                                key: '2',
                                                label: '켄싱턴리조트 부대시설',
                                                children:
                                                    <iframe
                                                        className={"view"}
                                                        title={"켄싱턴리조트 부대시설"}
                                                        src="https://www.kensington.co.kr/rcc/sub_facilities"/>
                                            },
                                            {
                                                key: '3',
                                                label: '신라호텔 부대시설',
                                                children:
                                                    <iframe
                                                        className={"view"}
                                                        title={"신라호텔 부대시설"}
                                                        src="https://www.shilla.net/jeju/retreat/index.do"/>
                                            }
                                        ]}
                                    />
                                </Col>
                            </Row>
                            : ''
                }
                <Row justify={"center"} align={"middle"}>
                    {
                        parsedSchedules.map((schedule: any, idx: number) => {
                            schedule = schedule.map((item: any) => {
                                return {
                                    ...item,
                                    description: <ul>
                                        {item.description ? <li>{item.description}</li> : ''}
                                        {item.move_method ? <li><a href={item.move_method}>이동방법</a></li> : ''}
                                    </ul>
                                }
                            })
                            return (
                                <Col key={idx} xs={{span: 24}} lg={{span: 8}} className={'col'}>
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