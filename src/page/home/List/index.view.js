import React from "react";
import styled from "styled-components";
import { ContentCard } from "../../../components/ContentCard";
import { Row, Col } from "antd";

export const ListBox = styled.div`
  padding: 10px;
  min-width: 77.5%;
  min-height: 70vh;
  position: relative;
  margin: auto;
  margin-top: 2vh;
  border-radius: 20px;
  box-shadow: 3px 3px 15px grey;
`;

export const List = props => {
  return (
    <ListBox>
      <div style={{ fontSize: 30, textAlign: "center" }}>{props.haveData}</div>
      <Row>
        {props.HotelData.map(res => (
          <Col
            key={res.hotel_name}
            md={{ span: 12 }}
            lg={{ span: 12 }}
            xl={{ span: 8 }}
          >
            <ContentCard
              key={res.hotel_name}
              Name={res.hotel_name}
              Image={res.image}
              Allay={res.alley_number + "  " + res.alley_name}
              Price={res.price}
              Address={res.address}
              Distance={res.distance}
              Postcode={res.post_code}
              PhoneNumber={res.phone_number}
              Electronics={res.facilities.electronics}
              Furniture={res.facilities.ferniture}
              Person={res.person}
              Maps={res.map}
            />
          </Col>
        ))}
      </Row>
    </ListBox>
  );
};
