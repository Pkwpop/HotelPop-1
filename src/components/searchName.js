import React from "react";
import { Select } from "antd";
import { Data, Alley } from "../data";

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
    const option = Alley.map(res => <Select key={res.name}>{res.name}</Select>);
    return (
      <Select
        showSearch
        placeholder="ซอย"
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
