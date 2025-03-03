"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button, Layout, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { Sider } = Layout;

import "./Navbar.scss";

const MainNavbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const menuOptions = [
    { label: "Historia", key: "history" },
    { label: "Información", key: "information" },
    { label: "Dress code", key: "dresscode" },
    { label: "FAQs", key: "faqs" },
    { label: "RSVP", key: "rsvp" },
  ];
  const Logo = () => (
    <Image src={"/emelys-logo.svg"} width={100} height={100} alt="Logo" />
  );
  return (
    <div className="main-navbar">
      {/* <Sider
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        collapsed={collapsed}
        className="h-screen fixed"
        theme="light"
      >
        <div className="flex flex-col gap-[24px]">
          <div className="pt-[18px] pl-[24px]">
            <Logo />
          </div>
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={menuOptions}
            className="main-menu"
          />
        </div>
      </Sider> */}
      <div className="flex flex-row justify-center border-b border-[#FFF]/25 py-[18px] px-[24px]">
        <Logo />
        {/* <Button
          onClick={() => setCollapsed(!collapsed)}
          className="bg-transparent border-none text-white hover:bg-transparent hover:border-none"
        >
          <MenuOutlined />
        </Button> */}
      </div>
    </div>
  );
};

export default MainNavbar;
