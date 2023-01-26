import React from "react";

const ArticleComponent = ({ articleObj }) => {
  return (
    <>
      <div>{articleObj.webPublicationDate}</div>

      <div className="title">{articleObj?.webTitle}</div>
      <div className="sub-title">{articleObj.fields?.headline}</div>
      <div
        dangerouslySetInnerHTML={{
          __html: articleObj.blocks.body[0]?.bodyHtml,
        }}
        style={{ overflow: "hidden" }}
      ></div>
    </>
  );
};

export default ArticleComponent;
