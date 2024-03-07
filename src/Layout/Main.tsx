import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

import {  Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

interface MyProp {
  children: React.ReactNode;
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("مدیریت", "1", <PieChartOutlined />),
  getItem("داشبورد", "2", <DesktopOutlined />),
  getItem("کاربران", "sub1", <UserOutlined />, [
    getItem("کاربر1", "3"),
    getItem("کاربر2", "4"),
    getItem("کاربر3", "5"),
  ]),
  getItem("تیم ها", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("فایل ها", "9", <FileOutlined />),
];

const Main = ({ children }: MyProp) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout style={{ padding: "0", margin: "0" }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />

        <Content
          style={{
            padding: "0",
            margin: "0",
            width: collapsed ? "95vw" : "88vw",
          }}
        >
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Simcartel ©{new Date().getFullYear()} HooshmandMohadeseh@gmail.com
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Main;
