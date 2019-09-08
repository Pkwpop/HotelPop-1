import React from "react";
import { Select } from "antd";
import { Data } from "../data";

class SearchName extends React.Component {
  state = {
    value: undefined
  };
  handleSearch = value => {
    if (value) {
      fetch(value, data => this.setState({ data }));
    } else {
      this.setState({ data: [] });
    }
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const option = Data.map(res => (
      <Select key={res.hotel_name}>{res.hotel_name}</Select>
    ));
    return (
      <Select
        showSearch
        placeholder="Name"
        style={{ width: "40%", margin: 5 }}
        showArrow={false}
        notFoundContent={null}
        value={this.state.value}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
      >
        {option}
      </Select>
    );
  }
}

export default SearchName;
