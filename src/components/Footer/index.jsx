import React from "react";
import { Image } from "antd-mobile";
import { Row, Col } from "antd";

// constants
import { images } from "constants/images";

// styles
import {
  FooterContainer,
  FooterContent,
  FooterItem,
  Title,
  SubTitle,
  SocialGroup,
  GroupCover,
  FooterInfoGroup,
} from "./style";

function Footer() {
  const listPartners1 = [
    { id: 1, image: images.ICON_PARTNER1 },
    { id: 2, image: images.ICON_PARTNER2 },
    { id: 3, image: images.ICON_PARTNER3 },
    { id: 4, image: images.ICON_PARTNER4 },
    { id: 5, image: images.ICON_PARTNER5 },
  ];
  const listPartners2 = [
    { id: 6, image: images.ICON_PARTNER6 },
    { id: 7, image: images.ICON_PARTNER7 },
    { id: 8, image: images.ICON_PARTNER8 },
    { id: 9, image: images.ICON_PARTNER9 },
    { id: 10, image: images.ICON_PARTNER10 },
  ];
  const listPartners3 = [
    { id: 11, image: images.ICON_PARTNER11 },
    { id: 12, image: images.ICON_PARTNER12 },
    { id: 13, image: images.ICON_PARTNER13 },
    { id: 14, image: images.ICON_PARTNER14 },
    { id: 15, image: images.ICON_PARTNER15 },
  ];
  const listPartners4 = [
    { id: 16, image: images.ICON_PARTNER16 },
    { id: 17, image: images.ICON_PARTNER17 },
    { id: 18, image: images.ICON_PARTNER18 },
    { id: 19, image: images.ICON_PARTNER19 },
    { id: 20, image: images.ICON_PARTNER20 },
  ];
  return (
    <FooterContainer>
      <FooterContent gutter={[16, 32]}>
        <FooterItem lg={8} md={24}>
          <Title>TIX</Title>
          <GroupCover>
            <div className="item-content">
              <SubTitle>FAQ</SubTitle>
              <SubTitle>Brand Guidelines</SubTitle>
            </div>
            <div>
              <SubTitle>FAQ</SubTitle>
              <SubTitle>Brand Guidelines</SubTitle>
            </div>
          </GroupCover>
        </FooterItem>
        <FooterItem lg={8} md={24}>
          <Title>ĐỐI TÁC</Title>
          <GroupCover>
            {listPartners1.map((item, index) => (
              <Image
                key={index}
                width={30}
                height={30}
                src={item.image}
                alt="icon-partner"
                className="icon-partner"
              />
            ))}
          </GroupCover>
          <GroupCover>
            {listPartners2.map((item, index) => (
              <Image
                key={index}
                width={30}
                height={30}
                src={item.image}
                alt="icon-partner"
                className="icon-partner"
              />
            ))}
          </GroupCover>
          <GroupCover>
            {listPartners3.map((item, index) => (
              <Image
                key={index}
                width={30}
                height={30}
                src={item.image}
                alt="icon-partner"
                className="icon-partner"
              />
            ))}
          </GroupCover>
          <GroupCover>
            {listPartners4.map((item, index) => (
              <Image
                key={index}
                width={30}
                height={30}
                src={item.image}
                alt="icon-partner"
                className="icon-partner"
              />
            ))}
          </GroupCover>
        </FooterItem>
        <FooterItem lg={8} md={24}>
          <SocialGroup>
            <div className="item-content">
              <Title>MOBILE APP</Title>
              <GroupCover>
                <Image
                  src={images.ICON_SOCIAL1}
                  alt="icon-social"
                  width={30}
                  height={30}
                  className="icon-partner"
                />
                <Image
                  src={images.ICON_SOCIAL2}
                  alt="icon-social"
                  width={30}
                  height={30}
                />
              </GroupCover>
            </div>
            <div>
              <Title>SOCIAL</Title>
              <GroupCover>
                <Image
                  src={images.ICON_SOCIAL3}
                  alt="icon-social"
                  width={30}
                  height={30}
                  className="icon-partner"
                />
                <Image
                  src={images.ICON_SOCIAL4}
                  alt="icon-social"
                  width={30}
                  height={30}
                />
              </GroupCover>
            </div>
          </SocialGroup>
        </FooterItem>
        <hr className="footer-divide" />
        <Row style={{ width: "100%" }}>
          <Col span={12}>
            <FooterInfoGroup>
              <Image
                className="img-brand-tix"
                src={images.ICON_BRAND1}
                width={80}
                height={38}
                alt="icon-brand-tix"
              />
              <div>
                <Title style={{ marginBottom: "8px" }}>
                  TIX - SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
                </Title>
                <div className="info">
                  - Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp.
                  Hồ Chí Minh, Việt Nam.
                </div>
                <div className="info">
                  - Giấy chứng nhận đăng ký kinh doanh số: 0101659783, đăng ký
                  thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch
                  và đầu tư Thành phố Hồ Chí Minh cấp.
                </div>
                <div className="info">Số Điện Thoại (Hotline): 1900545436</div>
                <div className="info">
                  - Email:{" "}
                  <span className="info-email">
                    truongthimyhao4295@gmail.com
                  </span>
                </div>
                <div className="info">
                  (Website chỉ phục vụ cho việc học tập !!)
                </div>
              </div>
            </FooterInfoGroup>
          </Col>
          <Col span={12} className="info-right">
            <Image
              src={images.ICON_BRAND2}
              alt="img-brand"
              height={48}
              width={100}
              className="img-brand-tix2"
            />
          </Col>
        </Row>
      </FooterContent>
    </FooterContainer>
  );
}
export default Footer;
