import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MenuBar } from "../app/menuBar";
import { Loading } from "../assets/loading";
import ArticleComponent from "../components/article/articleComponent";
import { updateArticleObj } from "../features/articleSlice";
import { fetchArticle } from "../middleware/fetchNews";

export const ArticlePage = () => {
  const articleUrl = localStorage.getItem("articleUrl");
  const { articleObj } = useSelector((state) => state.article);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateArticleObj(undefined));
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
      <ArticleComponent articleObj={articleObj} />
    </>
  ) : (
    <Loading />
  );
};
