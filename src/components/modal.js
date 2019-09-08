import React from "react";
import { Modal } from "antd";

export const Modals = ({ visible, handleOk, handleCancel }) => {
  return (
    <Modal
      title="Basic Modal"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};
