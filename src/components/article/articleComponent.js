import moment from "moment-timezone";
import React from "react";

const ArticleComponent = ({ articleObj }) => {
  const publicationDate = moment(articleObj.webPublicationDate)
    .tz("Europe/London")
    .format("ddd DD MMM yyyy HH.mm z")
    .toUpperCase();
  return (
    <>
      <div className="article-text">{publicationDate}</div>

      <div className="title">{articleObj?.webTitle}</div>
      <div
        className="article-text"
        dangerouslySetInnerHTML={{
          __html: articleObj.blocks.body[0]?.bodyHtml,
        }}
      />
    </>
  );
};

export default ArticleComponent;
