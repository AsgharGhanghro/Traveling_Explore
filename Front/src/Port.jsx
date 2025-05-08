import React from "react";
import { Space } from "antd";
import SideMenu from "./DbComp/SideMenu";
import PageContent from "./DbComp/PageContent";
const App = () => {
  
  return (
    <div className="flex flex-col h-screen w-screen overflow-x-hidden ">
      <Space>
        <SideMenu />
        <PageContent />
      </Space>
    </div>
  );
};

export default App;
