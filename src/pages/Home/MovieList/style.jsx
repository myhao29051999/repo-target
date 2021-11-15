import styled from "styled-components";
import Slider from "react-slick";
import { Tabs } from "antd";
import variableStyles from "styles/variable-styles";

const { TabPane } = Tabs;

export const SliderStyle = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    color: #b0adad;
  }
  padding-left: 20px;
  @media only screen and (max-width: 1438px) {
    padding-left: 10px;
  }
  @media only screen and (max-width: 1400px) {
    padding-left: 15px;
  }
  @media only screen and (max-width: 1345px) {
    padding-left: 10px;
  }
  @media only screen and (max-width: 1301px) {
    padding-left: 30px;
  }
  @media only screen and (max-width: 1274px) {
    padding-left: 25px;
  }
  @media only screen and (max-width: 1222px) {
    padding-left: 17px;
  }
  @media only screen and (max-width: 1180px) {
    padding-left: 10px;
  }
  @media only screen and (max-width: 1110px) {
    padding-left: 5px;
  }
  @media only screen and (max-width: 1096px) {
    padding-left: 25px;
  }
  @media only screen and (max-width: 1071px) {
    padding-left: 20px;
  }
  @media only screen and (max-width: 1035px) {
    padding-left: 12px;
  }
  @media only screen and (max-width: 1021px) {
    padding-left: 17px;
  }
  @media only screen and (max-width: 985px) {
    padding-left: 10px;
  }
  @media only screen and (max-width: 961px) {
    padding-left: 25px;
  }
  @media only screen and (max-width: 900px) {
    padding-left: 10px;
  }
  @media only screen and (max-width: 865px) {
    padding-left: 30px;
  }
  @media only screen and (max-width: 789px) {
    padding-left: 17px;
  }
  @media only screen and (max-width: 750px) {
    padding-left: 9px;
  }
`;
export const TabsShowTimeStyle = styled(Tabs)`
  .slick-prev:before,
  .slick-next:before {
    color: #b0adad;
  }
  .ant-tabs-nav-wrap {
    justify-content: center;
    margin-bottom: 20px;
  }
  .ant-tabs-nav::before {
    border-bottom: none !important;
  }
  .ant-tabs-tab:hover {
    color: ${variableStyles.primaryRed};
  }
  .ant-tabs-tab {
    font-size: ${variableStyles.fontSize_24};
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${variableStyles.primaryRed};
  }
  .ant-tabs-tab-btn:focus {
    color: ${variableStyles.primaryRed};
  }
  .ant-tabs-ink-bar {
    display: none;
    width: 0;
    background: transparent;
  }
`;

export const TabPaneShowTimeStyle = styled(TabPane)``;
