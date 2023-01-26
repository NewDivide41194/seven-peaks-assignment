import React from "react";
import { Card } from "../../assets/card";

const Sports = ({ sportData }) => {
  return (
    <>
      <div className="sub-title">Sports</div>
      <div className="grid-container">
        {sportData?.map((v, k) => (
          <Card
            key={k}
            title={v.webTitle}
            imgUrl={v.fields?.thumbnail}
            articleUrl={v.apiUrl}
            normal
          />
        ))}
      </div>
    </>
  );
};

export default Sports;
