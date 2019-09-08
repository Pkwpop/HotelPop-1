import React from "react";
import styled from "styled-components";
import SearchName from "../../../components/searchName";
import SearchDistance from "../../../components/searchDistance";
import SearchPrice from "../../../components/searchPrice";
import { Button } from "antd";

export const SearchBox = styled.div`
  padding: 10px;
  min-width: 77.5%;
  position: relative;
  margin: auto;
  margin-top: 1vh;
  border-radius: 15px;
  box-shadow: 3px 3px 15px grey;
`;

export const SearchBar = ({}) => {
  return (
    <SearchBox>
      <SearchName />
      <SearchDistance />
      <SearchPrice />
      <Button
        type="primary"
        shape="circle"
        icon="search"
        style={{ float: "right", margin: 5 }}
      />
    </SearchBox>
  );
};
