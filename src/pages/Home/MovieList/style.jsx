import styled from "styled-components";
import Slider from "react-slick";
import { Tabs } from "antd";
import variableStyles from "styles/variable-styles";

const { TabPane } = Tabs;

export const SliderStyle = styled(Slider)`
  position: relative;
  padding: 0 30px;
  .slick-prev:before,
  .slick-next:before {
    color: #b0adad;
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
