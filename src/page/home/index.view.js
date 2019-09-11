import React from "react";
import { Navbar } from "../../components/navbar";
import styled from "styled-components";
import SearchBar from "./SearchBar/index.view";
import { List } from "./List/index.view";
import { Modals } from "../../components/modal";
import { Data } from "../../data";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
`;

export const ContentBox = styled.div`
  padding: 10px;
  max-width: 80vw;
  min-height: 80vh;
  position: relative;
  margin: auto;
  margin-top: 5vh;
  border-radius: 20px;
  box-shadow: 3px 3px 15px grey;
`;

class Home extends React.Component {
  state = {
    current: "mail",
    data: Data
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  changeState = (Name, Distance, Price) => {
    if (Distance === 1) {
      this.setState({ minDistance: 0, maxDistance: 1000 });
    } else if (Distance === 2) {
      this.setState({ minDistance: 1001, maxDistance: 2000 });
    } else if (Distance === 3) {
      this.setState({ minDistance: 2001, maxDistance: 3000 });
    } else {
      this.setState({ minDistance: 0, maxDistance: 9999 });
    }
  };

  onSearch = (Name, Distance, Price) => {
    if (Name || Distance || Price) {
      this.changeState(Name, Distance, Price);
      let arrayName = [];
      let arrayDistance = [];
      let arrayPrice = [];

      if (Name !== "") {
        Data.filter(res => res.alley_name === Name).map(res => {
          arrayName.push(res);
        });
      } else {
        arrayName = Data;
      }

      if (Distance == 1) {
        arrayName
          .filter(res => res.distance < 1000)
          .map(res => arrayDistance.push(res));
      } else if (Distance == 2) {
        arrayName
          .filter(res => res.distance > 1001 && res.distance < 2000)
          .map(res => arrayDistance.push(res));
      } else if (Distance == 3) {
        arrayName
          .filter(res => res.distance > 2001 && res.distance < 3000)
          .map(res => arrayDistance.push(res));
      } else {
        arrayName
          .filter(res => res.distance < 9999)
          .map(res => arrayDistance.push(res));
      }

      if (Price == 1) {
        arrayDistance
          .filter(res => res.price < 500)
          .map(res => arrayPrice.push(res));
      } else if (Price == 2) {
        arrayDistance
          .filter(res => res.price >= 500 && res.price < 1000)
          .map(res => arrayPrice.push(res));
      } else if (Price == 3) {
        arrayDistance
          .filter(res => res.price > 1000)
          .map(res => arrayPrice.push(res));
      } else {
        arrayDistance
          .filter(res => res.price < 9000)
          .map(res => arrayPrice.push(res));
      }
      this.setState({ data: arrayPrice });
    } else {
      this.setState({ date: Data });
    }
  };

  render() {
    return (
      <Wrapper>
        <Navbar />
        <ContentBox>
          <SearchBar onClikedSeach={this.onSearch} />
          {/* <SelectedDropdown /> */}
          <List HotelData={this.state.data} />
        </ContentBox>
      </Wrapper>
    );
  }
}

export default Home;
