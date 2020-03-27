import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'
import {
    FlagOutlined,
    GlobalOutlined
} from "@ant-design/icons";
const { Sider } = Layout;

const Sidebar = (props) => {
    return(
        <Sider>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1">
                    <Link to="/cases-ph">
                        <FlagOutlined />
                        <span>Cases in PH</span>
                    </Link>
                </Menu.Item>
              <Menu.Item key="2">
                    <GlobalOutlined />
                    <span>Cases Outside PH</span>
              </Menu.Item>
              <Menu.Item key="3">
                <span>Option 3</span>
              </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default Sidebar;