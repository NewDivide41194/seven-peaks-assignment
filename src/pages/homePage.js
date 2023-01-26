import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSportData, updateTopStories } from "../features/homeSlice.js";

import { MenuBar } from "../app/menuBar";
import { fetchNews, fetchSport } from "../middleware/fetchNews.js";
import { Loading } from "../assets/loading.js";
import TopStories from "../components/home/topStories.js";
import Sports from "../components/home/sports.js";

export const HomePage = () => {
  const { topStories, sportData } = useSelector((state) => state.home);
  const { orderBy } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTopStories(null));
    dispatch(updateSportData(null));

    fetchNews(orderBy, (data, err) => {
      if (data) {
        dispatch(updateTopStories(data));
      } else {
        console.log(err);
      }
    });
    fetchSport(orderBy, (data, err) => {
      if (data) {
        dispatch(updateSportData(data));
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
          <TopStories topStories={topStories} />
          <Sports sportData={sportData} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};
