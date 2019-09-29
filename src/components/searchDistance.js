import React from "react";
import { Select } from "antd";
import { Data } from "../data";

class SearchDistance extends React.Component {
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
        placeholder="ระยะทาง"
        style={{ width: 120, margin: 5 }}
        showArrow={true}
        notFoundContent={null}
        value={this.props.value}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
      >
        <Select key="1">{"< 1 km."}</Select>
        <Select key="2">{"1 - 2 km."}</Select>
        <Select key="3">{"2 - 3 km."}</Select>
      </Select>
    );
  }
}

export default SearchDistance;
