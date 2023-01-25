import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MenuBar } from "../app/menuBar";
import { Card } from "../assets/card";
import { fetchSearchNews } from "../middleware/fetchNews";
import LoadingBar from "../assets/images/loading_bar.svg";

export const SearchResultPage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { searchText, orderBy } = useSelector((state) => state.app);

  useEffect(() => {
    fetchResult(page);
  }, [page]);

  useEffect(() => {
    setSearchResult([]);
    fetchResult(page);
  }, [searchText, orderBy]);

  const fetchResult = (page) => {
    setLoading(true);

    fetchSearchNews(searchText, orderBy, page, (data, err) => {
      if (data) {
        setSearchResult(searchResult.concat(data));
        setLoading(false);
      } else console.log(err);
    });
  };

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [searchResult]);

  return (
    <>
      <MenuBar title={"Search Result"} />
      <div className="grid-container">
        {searchResult?.map((v, k) => (
          <Card
            title={v.webTitle}
            imgUrl={v.fields?.thumbnail}
            body={v.body}
            articleUrl={v.apiUrl}
            normal
          />
        ))}
      </div>
      {loading && (
        <div style={{ textAlign: "center" }}>
          <img src={LoadingBar} alt="loading" width={100} />
        </div>
      )}
    </>
  );
};
