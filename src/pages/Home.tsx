import React, {useState} from 'react';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Layout, Button, Menu, Typography} from 'antd';

import "./Home.scss";

const {Header, Sider, Content} = Layout;
const {Link} = Typography;

const items: MenuProps['items'] = [
    {
        label: '여행목록',
        key: 'list',
        children: [
            {
                label: <Link href={"#/list/2023/jeju"}>{'2023-제주'}</Link>,
                key: "1"
            }
        ]
    }
];

function Home() {
    const [collapsed, setCollapsed] = useState(true);
    const [currentSelectedMenu, setCurrentSelectedMenu] = useState('list');

    const onMenuClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrentSelectedMenu(e.key);
    };

    return (
        <Layout id="main" hasSider>
            <Header style={{padding: 0, height: "100vh", backgroundColor: "#fff"}}>
                <Sider trigger={null} collapsible={true} collapsed={collapsed} collapsedWidth={0}>
                    <Menu
                        id="menu"
                        mode="inline"
                        style={{height: '100%'}}
                        items={items}
                        onClick={onMenuClick}
                    />
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