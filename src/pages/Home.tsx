import React, {useState} from 'react';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import {Layout, Button} from 'antd';
import Menus from './menu';

import "./Home.scss";

const {Header, Sider, Content} = Layout;

function Home() {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <Layout id="main" hasSider>
            <Header style={{padding: 0, height: "100vh", backgroundColor: "#fff"}}>
                <Sider trigger={null} collapsible={true} collapsed={collapsed} collapsedWidth={0}>
                    <Menus/>
                </Sider>
            </Header>
            <Button
                id={"menuBtn"}
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined className="icon"/> : <MenuFoldOutlined className="icon"/>}
                onClick={() => setCollapsed(!collapsed)}
            />
            <Content id="content">
                <h1>Travel Logs</h1>
            </Content>
        </Layout>
    )
}

export default Home