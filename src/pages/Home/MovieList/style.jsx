import styled from "styled-components";
import Slider from "react-slick";
import { Tabs } from "antd";
import variableStyles from "styles/variable-styles";

const { TabPane } = Tabs;

export const SliderStyle = styled(Slider)`
  position: relative;
  padding: 0 30px;
  .slick-arrow-left {
    width: 40px;
    position: absolute;
    top: 49%;
    left: -10px;
    transform: translateY(-50%);
    @media only screen and (max-width: 500px) {
      width: 25px;
      left: -5px;
    }
  }
  .slick-arrow-right {
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 49%;
    right: -10px;
    transform: translateY(-50%);
    @media only screen and (max-width: 500px) {
      width: 25px;
      right: -5px;
    }
  }
`;
export const TabsShowTimeStyle = styled(Tabs)`
  .ant-tabs-nav-wrap {
    justify-content: center;
    margin-bottom: 20px;
  }
  .ant-tabs-nav {
    margin: 0;
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
