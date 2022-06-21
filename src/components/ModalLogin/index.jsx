import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Row, Col } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// constants
import { images } from "constants/images";

// actions
import { postLogin, registerAccount } from "store/actions/user.action";

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
  const [isShowSuggest, setIsShowSuggest] = useState(true);

  // constants
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch();

  const onOpenModalRegister = () => {
    setIsOpenRegister(true);
    setIsShowSuggest(false);
  };

  const handleCancel = () => {
    setIsOpenRegister(false);
    setIsShowSuggest(true);
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

  const onFinishRegister = (values) => {
    const body = { maLoaiNguoiDung: "KhachHang", maNhom: "GP02", ...values };
    dispatch(registerAccount(body));
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
      <Form
        layout="vertical"
        form={form}
        onFinish={isOpenRegister ? onFinishRegister : onFinish}
      >
        <Form.Item
          label="Tài khoản"
          name="taiKhoan"
          rules={[{ required: true, message: "Bắt buộc nhập!" }]}
        >
          <Input placeholder="Nhập tài khoản" name="taiKhoan" />
        </Form.Item>
        <Form.Item
          label="Mật khẩu"
          name="matKhau"
          rules={[{ required: true, message: "Bắt buộc nhập!" }]}
        >
          <InputPassword placeholder="Nhập mật khẩu" />
        </Form.Item>

        {isOpenRegister && (
          <>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Số điện thoại"
                  name="soDt"
                  rules={[
                    {
                      required: true,
                      message: "Bắt buộc nhập!",
                    },
                    {
                      // required: true,
                      pattern: new RegExp(
                        /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/
                      ), // vnf_regex
                      message: "Số điện thoại không hợp lệ.",
                    },
                  ]}
                >
                  <Input placeholder="Nhập số điện thoại" name="soDt" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Bắt buộc nhập!" },
                    { type: "email", message: "Email không hợp lệ." },
                  ]}
                >
                  <Input placeholder="Nhập email" name="email" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Họ tên"
              name="hoTen"
              rules={[{ required: true, message: "Bắt buộc nhập!" }]}
            >
              <Input
                placeholder="Nhập họ tên"
                name="hoTen"
                onKeyPress={(event) => {
                  if (/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </Form.Item>
          </>
        )}

        <a href="#" onClick={onSubmitForm} aria-hidden={true}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {isOpenRegister ? "Đăng ký" : "Đăng nhập"}
        </a>
      </Form>
      {isShowSuggest && (
        <CreateAccountGroup>
          <TitleNoAccount>Bạn chưa có tài khoản?</TitleNoAccount>
          <ButtonCreate onClick={onOpenModalRegister}>
            Đăng ký ngay nào
          </ButtonCreate>
        </CreateAccountGroup>
      )}
    </ModalLoginStyle>
  );
}
ModalLogin.propTypes = {
  visible: PropTypes.bool,
  onCancel: PropTypes.func,
};
export default ModalLogin;
