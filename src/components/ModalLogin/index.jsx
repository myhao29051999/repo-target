import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form } from "antd";

// constants
import { images } from "constants/images";

// components
import { Input } from "components";

// styles
import {
  ModalLoginStyle,
  TitleNoAccount,
  ButtonCreate,
  CreateAccountGroup,
} from "./style";

function ModalLogin(props) {
  const { visible, onCancel, ...other } = props;
  const [isOpenRegister, setIsOpenRegister] = useState(false);
  const onOpenModalRegister = () => {
    setIsOpenRegister(true);
  };
  const handleCancel = () => {
    setIsOpenRegister(false);
    onCancel();
  };
  const handleLogin = () => {
    console.log("login");
  };

  return (
    <ModalLoginStyle
      title={null}
      visible={visible}
      onCancel={handleCancel}
      footer={null}
    >
      <img className="modal-header__logo" src={images.LOGO} />
      <p className="title-login">Thế giới phim trên đầu ngón tay</p>
      <p className="title-login">
        Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
      </p>
      <Form layout="vertical">
        {/* <Form.Item label="Ho va ten" name="username">
          <Input placeholder="nhap ten" clearable />
        </Form.Item> */}
        <Form.Item label="Tài khoản" name="taiKhoan">
          <Input placeholder="Nhập tài khoản" name="taiKhoan" allowClear />
        </Form.Item>
        <Form.Item label="Mật khẩu" name="matKhau">
          <Input placeholder="Nhập mật khẩu" allowClear />
        </Form.Item>
        <a href="#" onClick={handleLogin} aria-hidden={true}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {isOpenRegister ? "Đăng ký" : "Đăng nhập"}
        </a>
      </Form>
      <CreateAccountGroup>
        <TitleNoAccount>Bạn chưa có tài khoản?</TitleNoAccount>
        <ButtonCreate onClick={onOpenModalRegister}>
          Đăng ký ngay nào
        </ButtonCreate>
      </CreateAccountGroup>

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
