import React from "react";
import { Select } from "antd";

const { Option } = Select;

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
        showArrow={true}
        notFoundContent={null}
        value={this.props.value}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
      >
        <Option key="1">{"< 500฿ "}</Option>
        <Option key="2">{"500 - 1,000฿"}</Option>
        <Option key="3">{"> 1,000฿"}</Option>
      </Select>
    );
  }
}

export default SearchPrice;
