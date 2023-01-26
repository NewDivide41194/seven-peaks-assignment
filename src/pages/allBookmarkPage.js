import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { MenuBar } from "../app/menuBar";
import { Loading } from "../assets/loading";
import Bookmark from "../components/bookmark/bookmark";

export const AllBookmarkPage = () => {
  const { orderBy } = useSelector((state) => state.app);
  const { bookmark } = useSelector((state) => state.bookmark);

  const [loading, setLoading] = useState(false);
  const data = [...bookmark];

  const orderedData =
    orderBy === "oldest"
      ? data?.sort(
          (a, b) =>
            new Date(a.webPublicationDate) - new Date(b.webPublicationDate)
        )
      : data?.sort(
          (a, b) =>
            new Date(b.webPublicationDate) - new Date(a.webPublicationDate)
        );

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return clearInterval();
  }, []);
  return (
    <>
      <MenuBar title={"All bookmark"} noViewBookmark />
      {orderedData.length > 0 ? (
        <Bookmark orderedData={orderedData} />
      ) : !loading ? (
        <NoData />
      ) : (
        <Loading />
      )}
    </>
  );
};

const NoData = () => {
  return <div className="card-title alert-text-container">No Bookmark!</div>;
};
