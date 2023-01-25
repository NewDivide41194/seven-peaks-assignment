import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Card } from "../assets/card.js";
import { MenuBar } from "../app/menuBar";
import { fetchNews, fetchSport } from "../middleware/fetchNews.js";
import { Loading } from "../assets/loading.js";

export const HomePage = () => {
  const [sportData, setSportData] = useState(null);
  const [topStories, setTopStories] = useState(null);
  const { orderBy } = useSelector((state) => state.app);

  useEffect(() => {
    setSportData(null);
    setTopStories(null)
    fetchNews(orderBy, (data, err) => {
      if (data) {
        setTopStories(data);
      } else {
        console.log(err);
      }
    });
    fetchSport(orderBy, (data, err) => {
      if (data) {
        setSportData(data);
      } else {
        console.log(err);
      }
    });
  }, [orderBy]);

  return (
    <>
      <MenuBar title={"Top stories"} />
      {sportData && topStories ? (
        <>
          <div className="grid-container">
            {topStories?.slice(0, 5).map((v, k) => (
              <Card
                key={k}
                title={v.webTitle}
                imgUrl={v.fields?.thumbnail}
                titleCard={k >= 3}
                articleUrl={v.apiUrl}
                body={k===0?v.blocks.body[0].bodyTextSummary:undefined}
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
      ) : (
        <Loading />
      )}
    </>
  );
};
