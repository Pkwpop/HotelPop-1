import React from "react";
import { Navbar } from "../../components/navbar";
import styled from "styled-components";
import { SearchBar } from "./SearchBar/index.view";
import { List } from "./List/index.view";
import { Modals } from "../../components/modal";

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
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Wrapper>
        <Navbar />
        <ContentBox>
          <SearchBar />
          {/* <SelectedDropdown /> */}
          <List />
        </ContentBox>
      </Wrapper>
    );
  }
}

export default Home;
