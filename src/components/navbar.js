/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { Menu } from "antd";
import styled from "styled-components";

const Nav = styled.div`
  id="navbar";
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 30px 10px;
  transition: 0.4s;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
`;

const Wrapper = styled.div``;

export const Navbar = () => {
  return (
    <Wrapper>
      <Nav />
      <Menu mode="horizontal" theme="dark">
        <Menu.Item
          style={{
            fontSize: "150%",
            textAlign: "center"
          }}
        >
          Logo
        </Menu.Item>
        <Menu.Item style={{ fontSize: "150%" }}>About</Menu.Item>
      </Menu>
    </Wrapper>
  );
};
