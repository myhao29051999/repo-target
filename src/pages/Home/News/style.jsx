import styled from "styled-components";
import variableStyles from "styles/variable-styles";

export const NewsContent = styled.div`
  p {
    margin: 0;
  }
  .ant-tabs-card .ant-tabs-content {
    height: 600px;
    margin-top: -16px;
  }
  .ant-tabs-card .ant-tabs-content > .ant-tabs-tabpane {
    padding: 16px;
    background: #fff;
  }
  .ant-tabs-card > .ant-tabs-nav::before {
    display: none;
  }
  .ant-tabs-card .ant-tabs-tab,
  [data-theme="compact"] .card-container > .ant-tabs-card .ant-tabs-tab {
    background: transparent;
    border-color: transparent;
  }
  .ant-tabs-card .ant-tabs-tab-active,
  [data-theme="compact"] .card-container > .ant-tabs-card .ant-tabs-tab-active {
    background: #fff;
    border-color: #fff;
  }
  #components-tabs-demo-card-top .code-box-demo {
    padding: 24px;
    overflow: hidden;
    background: #f5f5f5;
  }
  [data-theme="compact"] .card-container > .ant-tabs-card .ant-tabs-content {
    height: 120px;
    margin-top: -8px;
  }
  [data-theme="dark"] .card-container > .ant-tabs-card .ant-tabs-tab {
    background: transparent;
    border-color: transparent;
  }
  [data-theme="dark"] #components-tabs-demo-card-top .code-box-demo {
    background: #000;
  }
  [data-theme="dark"]
    .card-container
    > .ant-tabs-card
    .ant-tabs-content
    > .ant-tabs-tabpane {
    background: #141414;
  }
  [data-theme="dark"] .card-container > .ant-tabs-card .ant-tabs-tab-active {
    background: #141414;
    border-color: #141414;
  }

  /* custom styles */
  .ant-tabs-tab {
    font-size: ${variableStyles.fontSize_24};
    transform: scale(1);
  }
  .ant-tabs-nav-wrap {
    justify-content: center;
  }
  .ant-tabs-tab-btn:hover {
    color: ${variableStyles.textBlack};
    transform: scale(1.2);
    margin-right: 10px;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: red;
    text-shadow: 0 0 0.25px currentColor;
    transform: scale(1);
    margin-right: 0px;
  }
  .img-news {
    cursor: pointer;
  }
`;
export const NewsItem = styled.div``;
