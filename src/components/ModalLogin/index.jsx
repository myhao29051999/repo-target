import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// constants
import { images } from "constants/images";

// actions
import { postLogin } from "store/actions/user.action";

// components
import { Input, InputPassword } from "components";

// styles
import {
  ModalLoginStyle,
  TitleNoAccount,
  ButtonCreate,
  CreateAccountGroup,
} from "./style";

function ModalLogin(props) {
  const { visible, onCancel, ...other } = props;

  // states
  const [isOpenRegister, setIsOpenRegister] = useState(false);
  const [user, setUser] = useState({});

  // constants
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch();

  const onOpenModalRegister = () => {
    setIsOpenRegister(true);
  };

  const handleCancel = () => {
    setIsOpenRegister(false);
    onCancel();
  };

  const onSubmitForm = () => {
    form.submit();
  };

  const onFinish = (values) => {
    dispatch(postLogin(values.taiKhoan, values.matKhau, history));
    handleCancel();
    form.resetFields();
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
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item
          label="Tài khoản"
          name="taiKhoan"
          rules={[{ required: true, message: "Vui lòng nhập tên tài khoản" }]}
        >
          <Input placeholder="Nhập tài khoản" name="taiKhoan" />
        </Form.Item>
        <Form.Item
          label="Mật khẩu"
          name="matKhau"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
        >
          <InputPassword placeholder="Nhập mật khẩu" />
        </Form.Item>

        <a href="#" onClick={onSubmitForm} aria-hidden={true}>
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
