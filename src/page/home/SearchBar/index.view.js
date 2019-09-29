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
    this.setState({ Name: value, nameValue: value });
  };
  searchDistance = value => {
    this.setState({ Distance: value, distanceValue: value });
  };
  searchPrice = value => {
    this.setState({ Price: value, priceValue: value });
  };

  onSearch = () => {
    this.props.onClikedSeach(
      this.state.Name,
      this.state.Distance,
      this.state.Price
    );
  };

  onReset = () => {
    this.setState({ Name: undefined, Distance: undefined, Price: undefined });
    this.setState({
      nameValue: undefined,
      distanceValue: undefined,
      priceValue: undefined
    });
    this.props.onClikedSeach("", "", "");
  };

  render() {
    return (
      <SearchBox>
        <SearchName
          handleChange={this.searchName}
          value={this.state.nameValue}
        />
        <SearchDistance
          handleChange={this.searchDistance}
          value={this.state.distanceValue}
        />
        <SearchPrice
          handleChange={this.searchPrice}
          value={this.state.priceValue}
        />
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
