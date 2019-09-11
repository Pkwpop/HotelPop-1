/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { Menu } from "antd";
import styled from "styled-components";

const Nav = styled.div`
  id="navbar";
  overflow: hidden;
  background-color: #2C3E50;
  height: 9vh;
  transition: 0.4s;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
  font-size: 30px;
  font-weight: 600;
  color: #DADADA;
`;

const Wrapper = styled.div``;

export const Navbar = () => {
  return (
    <Wrapper>
      <Nav style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <div style={{ width: "10vw", marginLeft: "auto", cursor: "pointer" }}>
          About
        </div>
      </Nav>
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
