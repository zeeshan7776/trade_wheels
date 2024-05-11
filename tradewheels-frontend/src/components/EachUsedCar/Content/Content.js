import React from "react";
import HeadingBar from "./ContentData/HeadingBar";
import MainData from "./ContentData/MainData";

const Content = ({ carAdData }) => {
  return (
    <>
      <div>
        <HeadingBar carAdData={carAdData} />
      </div>
      <div>
        <MainData carAdData={carAdData} />
      </div>
    </>
  );
};

export default Content;
