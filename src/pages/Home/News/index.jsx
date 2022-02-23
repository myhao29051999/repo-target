import React from "react";
import { Tabs } from "antd";
// layouts
import MasterLayout from "layouts/MasterLayout";

// styles
import { NewsContent, NewsItem } from "./style";
const { TabPane } = Tabs;
function News() {
  return (
    <MasterLayout id="news">
      <NewsContent className="card-container">
        <Tabs type="card">
          <TabPane tab="Điện ảnh 24h" key="1"></TabPane>
          <TabPane tab="Review" key="2">
            <p>my review</p>
          </TabPane>
          <TabPane tab="Khuyến mãi" key="3">
            <p>kmai</p>
          </TabPane>
        </Tabs>
      </NewsContent>
    </MasterLayout>
  );
}
export default News;
