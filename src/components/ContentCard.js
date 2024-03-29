import React, { useEffect, useState } from "react";
import { Card, Modal, Carousel, Icon, List, Col, Row } from "antd";
import { MapPin } from "styled-icons/feather/MapPin";
import { Car, Bed } from "styled-icons/boxicons-solid";
import { PriceTag } from "styled-icons/icomoon";
import { Wifi, Phone, People } from "styled-icons/material";
import { Elec } from "styled-icons/crypto";
import MapComponent from "./googleMaps";

const { Meta } = Card;
export const ContentCard = ({
  Name,
  Image,
  Allay,
  Price,
  Address,
  Distance,
  PostCode,
  PhoneNumber,
  Electronics,
  Furniture,
  Person,
  Maps
}) => {
  const [visible, setVisibleModal] = useState(false);
  useEffect(() => {});

  return (
    <div>
      <Card
        onClick={() => setVisibleModal(true)}
        hoverable
        style={{ width: "94%", margin: 10 }}
        cover={
          <img
            style={{ height: "300px", width: "100%", objectFit: "cover" }}
            alt="example"
            src={Image[0] + ".png"}
          />
        }
      >
        <Meta title={Name} description={Allay} />
        <Meta description={"฿" + Price} />
      </Card>
      <Modal
        title={Name}
        visible={visible}
        width={"70%"}
        onCancel={() => setVisibleModal(false)}
        footer={null}
      >
        <Carousel autoplay>
          {Image.map((res,index) => (
            <div key={index}>
              <img
                style={{
                  width: 300,
                  height: 300,
                  margin: "auto",
                  objectFit: "cover"
                }}
                src={res + ".png"}
                alt="example"
              />
            </div>
          ))}
        </Carousel>
        <div
          style={{
            margin: 10,
            borderRadius: 20,
            boxShadow: "3px 3px 15px grey",
            padding: 10
          }}
        >
          <Row>
            <Col span={8}>
              <div>
                <div style={{ height: 60, display: "flex" }}>
                  <div style={{ margin: 2 }}>
                    <MapPin width={30} />
                  </div>
                  {Address}
                </div>
                <div style={{ margin: 2, height: 60, display: "flex" }}>
                  <div style={{ margin: 2 }}>
                    <Car width={30} /> ระยะทางจาก มช. {Distance} เมตร.
                  </div>
                </div>
                <div style={{ height: 60, display: "flex" }}>
                  <div style={{ margin: 2 }}>
                    <Elec width={30} />
                  </div>
                  <div style={{ display: "flex", margin: 2, height: 60 }}>
                    เครื่องใช้ไฟฟ้า:
                    {Electronics.map(res => {
                      return `  ${res},`;
                    })}
                  </div>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <div style={{ height: 60, display: "flex" }}>
                  <div style={{ margin: 2 }}>
                    <Bed width={30} />
                  </div>
                  เฟอร์นิเจอร์:
                  {Furniture.map(res => {
                    return `  ${res},`;
                  })}
                </div>
                <div style={{ height: 60, display: "flex" }}>
                  <div>
                    <Phone width={30} />{" "}
                    {PhoneNumber.map(res => {
                      return ` ${res},`;
                    })}
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ margin: "auto" }}>
                    <Wifi width={30} /> ฟรีไวไฟ
                  </div>
                  <div style={{ margin: "auto" }}>
                    <People width={30} /> {Person}
                  </div>
                  <div style={{ margin: "auto" }}>
                    <PriceTag width={30} /> {Price + " บาท"}
                  </div>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <MapComponent Latitude={Maps[0]} Longitude={Maps[1]} />
            </Col>
          </Row>
        </div>
      </Modal>
    </div>
  );
};
