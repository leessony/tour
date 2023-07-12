import React, {useState} from 'react'
import {Menu, MenuProps, Typography} from "antd";

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

function Menus() {
    const [currentSelectedMenu, setCurrentSelectedMenu] = useState('list');
    const onMenuClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrentSelectedMenu(e.key);
    };
    return (
        <Menu
            id="menu"
            mode="inline"
            style={{height: '100%'}}
            items={items}
            onClick={onMenuClick}
        />
    )
}

export default Menus