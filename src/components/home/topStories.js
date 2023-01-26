import React from "react";
import { Card } from "../../assets/card";

const TopStories = ({topStories}) => {
  return (
    <>
      <div className="grid-container">
        {topStories?.slice(0, 5).map((v, k) => (
          <Card
            key={k}
            title={v.webTitle}
            imgUrl={v.fields?.thumbnail}
            titleCard={k >= 3}
            articleUrl={v.apiUrl}
            body={k === 0 ? v.blocks.body[0].bodyTextSummary : undefined}
          />
        ))}
      </div>
      <div className="grid-container">
        {topStories?.slice(5, 8).map((v, k) => (
          <Card
            key={k}
            title={v.webTitle}
            imgUrl={v.fields?.thumbnail}
            body={v.blocks.body[0].bodyTextSummary}
            articleUrl={v.apiUrl}
            normal
          />
        ))}
      </div>
    </>
  );
};

export default TopStories;
