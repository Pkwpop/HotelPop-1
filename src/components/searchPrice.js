import React from "react";
import { Select } from "antd";
import { Data } from "../data";

class SearchPrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: undefined
    };
  }
  handleSearch = value => {
    if (value) {
      fetch(value, data => this.setState({ data }));
    } else {
      this.setState({ data: [] });
    }
  };

  handleChange = value => {
    this.setState({ value });
    this.props.handleChange(value);
  };

  render() {
    return (
      <Select
        placeholder="ราคา"
        style={{ width: 120, textAlign: "center", margin: 5 }}
        showArrow={false}
        notFoundContent={null}
        value={this.state.value}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
      >
        <Select key="1">{"< 500฿ "}</Select>
        <Select key="2">{"500 - 1,000฿"}</Select>
        <Select key="3">{"> 1,000฿"}</Select>
      </Select>
    );
  }
}

export default SearchPrice;
