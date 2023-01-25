import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuBar } from "../app/menuBar";
import { Loading } from "../assets/loading";
import { updateArticleObj } from "../features/appSlice";
import { fetchArticle } from "../middleware/fetchNews";

export const ArticlePage = () => {
  const articleUrl = localStorage.getItem("articleUrl");
  const {articleObj } = useSelector((state) => state.app);

  const dispatch=useDispatch()
  useEffect(() => {
    fetchArticle(articleUrl, (data, err) => {
      if (data) {
        dispatch(updateArticleObj(data));
      } else {
        console.log(err);
      }
    });
  }, []);

  return articleObj ? (
    <>
      <MenuBar
        noDropDown
        button={"ADD BOOKMARK"}
        noViewBookmark
        articleObj={articleObj}
      />
      <div>
        <div>{articleObj.webPublicationDate}</div>

        <div className="title">{articleObj?.webTitle}</div>
        <div className="sub-title">{articleObj.fields?.headline}</div>
        <div
          dangerouslySetInnerHTML={{
            __html: articleObj.blocks.body[0]?.bodyHtml,
          }}
          style={{overflow:"hidden"}}
        ></div>
      </div>
    </>
  ) : (
    <Loading />
  );
};
