import React from 'react';
import {Table} from "antd";
import plans from '../datasources/jeju.json';

import "./Jeju2023Summer.scss"

function Jeju2023Summer() {
    const parsedPlans = plans.map((item: any, idx: number) => {
        return {...item, no: idx + 1}
    })
    return (
        <div id="content">
            <header id="header" className="App-header">
                <h1>제주여행 2023</h1>
            </header>
            <section id="main">
                <Table
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
                        }
                    ]}
                    dataSource={parsedPlans}
                />
            </section>
        </div>
    )
}

export default Jeju2023Summer