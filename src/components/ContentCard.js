import React, { useEffect, useState } from "react";
import { Card, Modal, Carousel, Icon, List } from "antd";
import { MapPin } from "styled-icons/feather/MapPin";
import { Car, Bed } from "styled-icons/boxicons-solid";
import { PriceTag } from "styled-icons/icomoon";
import { Waves, Wifi, Phone, People } from "styled-icons/material";
import { list } from "postcss";
import { Elec } from "styled-icons/crypto";

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
  Person
}) => {
  const [visible, setVisibleModal] = useState(false);

  useEffect(() => {
    document.title = `You clicked ${visible} times`;
  });

  return (
    <div>
      <Card
        onClick={() => setVisibleModal(true)}
        hoverable
        style={{ width: "94%", margin: 10 }}
        cover={
          <img
            style={{ height: "100%", width: "100%" }}
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title={Name} description={`ซอย ` + Allay} />
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
          {Image.map(res => (
            <div>
              <img
                style={{ width: 300, height: 300, margin: "auto" }}
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                alt="example"
              />
            </div>
          ))}
        </Carousel>
        <p>
          <MapPin width={30}></MapPin>
          {Address}
        </p>
        <p>
          <Car width={30} /> ระยะทางจาก มช. {Distance} เมตร.
        </p>
        <p>
          <PriceTag width={30} /> {Price + " บาท"}
        </p>
        <p>
          <Elec width={30} />
          เครื่องใช้ไฟฟ้า:
          {Electronics.map(res => {
            return `  ${res},`;
          })}
        </p>
        <p>
          <Bed width={30} />
          เฟอร์นิเจอร์:
          {Furniture.map(res => {
            return `  ${res},`;
          })}
        </p>
        <p>
          <Wifi width={30} />
          ฟรีไวไฟ
        </p>
        <p>
          <Phone width={30} />{" "}
          {PhoneNumber.map(res => {
            return ` ${res},`;
          })}
        </p>
        <p>
          <People width={30} /> {Person}
        </p>
      </Modal>
    </div>
  );
};
