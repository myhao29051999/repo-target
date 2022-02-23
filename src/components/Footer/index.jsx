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
      <FooterContent gutter={[16, 0]}>
        <FooterItem span={8}>
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
        <FooterItem span={8}>
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
        <FooterItem span={8}>
          <SocialGroup>
            <div>
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
      </FooterContent>
    </FooterContainer>
  );
}
export default Footer;
