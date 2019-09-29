import React from "react";
import { Select } from "antd";
import { Data, Alley } from "../data";

const { Option } = Select;

class SearchName extends React.Component {
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
    const option = Alley.map(res => <Option key={res.name}>{res.name}</Option>);
    return (
      <Select
        showSearch
        placeholder="ซอย"
        style={{ width: "40%", margin: 5 }}
        showArrow={true}
        notFoundContent={null}
        value={this.props.value}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
      >
        {option}
      </Select>
    );
  }
}

export default SearchName;
