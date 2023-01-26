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

  // fetch data and update search result
  useEffect(() => {
    fetchResult(page);
  }, [searchText, orderBy]);

  const fetchResult = (page) => {
    setLoading(true);
    fetchSearchNews(searchText, orderBy, page, (data, err) => {
      if (data) {
        setSearchResult(data);
        setLoading(false);
      } else console.log(err);
    });
  };

  // fetch and add more result by page change
  useEffect(() => {
    fetchMoreResult(page);
  }, [page]);

  const fetchMoreResult = (page) => {
    setLoading(true);
    fetchSearchNews(searchText, orderBy, page, (data, err) => {
      if (data) {
        setSearchResult(searchResult.concat(data));
        setLoading(false);
      } else console.log(err);
    });
  };

  // add page number at end of scroll
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
      <div className="grid-container-1">
        {searchResult?.map((v, k) => (
          <Card
            key={k}
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
