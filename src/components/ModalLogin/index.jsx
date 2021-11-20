import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input, Form } from "antd";

// constants
import { images } from "constants/images";

// styles
import { ModalLoginStyle } from "./style";

function ModalLogin(props) {
  const { visible, onCancel, ...other } = props;
  const [isOpenRegister, setOpenRegister] = useState(false);
  const onOpenModalRegister = () => {
    setOpenRegister(true);
  };
  const handleCancel = () => {
    setOpenRegister(false);
    onCancel();
  };

  return (
    <ModalLoginStyle
      title={null}
      visible={visible}
      onCancel={handleCancel}
      footer={null}
    >
      <img className="modal-header__logo" src={images.LOGO} />
      <p>Thế giới phim trên đầu ngón tay</p>
      <p>Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!</p>
      <Form>
        <Form.Item></Form.Item>
      </Form>
      {/* {isOpenRegister ? <p>Đăng kí nè</p> : <p>Đăng nhập thôi nào</p>} */}
      {/* <button onClick={onOpenModalRegister}>Đăng ký</button> */}
    </ModalLoginStyle>
  );
}
ModalLogin.propTypes = {
  visible: PropTypes.bool,
  onCancel: PropTypes.func,
};
export default ModalLogin;
