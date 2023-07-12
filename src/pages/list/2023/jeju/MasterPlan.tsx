import React from 'react';
import {useNavigate} from "react-router-dom";
import {Table, Typography, Layout} from "antd";
import {CaretLeftOutlined} from '@ant-design/icons';
import plans from '../../../../datasources/jeju.json';

import "./MasterPlan.scss"

const {Header, Content} = Layout
const {Link} = Typography;

function MasterPlan() {
    const navigate = useNavigate()

    const parsedPlans = plans.map((item: any, idx: number) => {
        return {...item, no: idx + 1}
    })
    return (
        <Layout id="jeju">
            <Header id="header">
                <h1><span onClick={() => navigate("/")}><CaretLeftOutlined/></span> 제주여행 2023</h1>
            </Header>
            <Content id="content">
                <Table
                    rowKey={'no'}
                    bordered={true}
                    pagination={false}
                    columns={[
                        {
                            key: "day",
                            dataIndex: "day",
                            title: "순서",
                            align: "center"
                        },
                        {
                            key: "date",
                            dataIndex: "date",
                            title: "날짜",
                            align: "center"
                        },
                        {
                            key: "day of  the week",
                            dataIndex: "day of  the week",
                            title: "요일",
                            align: "center"
                        },
                        {
                            key: "accommodations",
                            dataIndex: "accommodations",
                            title: "숙소",
                            align: "center",
                            render: (val: string, item: any) => {
                                return val !== "-" ? <Link href={item.location}>{val}</Link> : <span>{val}</span>
                            }
                        },
                        {
                            key: "schedule",
                            dataIndex: "schedule",
                            title: "일정",
                            align: "center",
                            render: (_, record: any) => {
                                return (
                                    <Link href={`#/list/2023/jeju/schedule?date=${record.date}`}>상세보기</Link>
                                )
                            }
                        }
                    ]}
                    dataSource={parsedPlans}
                />
            </Content>
        </Layout>
    )
}

export default MasterPlan;