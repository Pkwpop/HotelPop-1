import React, { Component } from "react";
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

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Distance: "",
      Price: ""
    };
  }

  searchName = value => {
    this.setState({ Name: value });
  };
  searchDistance = value => {
    this.setState({ Distance: value });
  };
  searchPrice = value => {
    this.setState({ Price: value });
  };

  onSearch = () => {
    this.props.onClikedSeach(
      this.state.Name,
      this.state.Distance,
      this.state.Price
    );
  };

  onReset = () => {
    this.setState({ Name: "", Distance: "", Price: "" });
    this.props.onClikedSeach("", "", "");
  };

  render() {
    return (
      <SearchBox>
        <SearchName handleChange={this.searchName} />
        <SearchDistance handleChange={this.searchDistance} />
        <SearchPrice handleChange={this.searchPrice} />
        <Button
          type="primary"
          shape="circle"
          icon="sync"
          style={{ float: "right", margin: 5 }}
          onClick={this.onReset}
        />
        <Button
          type="primary"
          shape="circle"
          icon="search"
          style={{ float: "right", margin: 5 }}
          onClick={this.onSearch}
        />
      </SearchBox>
    );
  }
}
