import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuBar } from "../app/menuBar";
import { Card } from "../assets/card";
import { Loading } from "../assets/loading";

export const AllBookmarkPage = () => {
  const { bookmark, orderBy } = useSelector((state) => state.app);
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
        <div className="grid-container">
          {orderedData.map((v, k) => (
            <Card
              key={k}
              normal
              title={v.webTitle}
              imgUrl={v.fields?.thumbnail}
              articleUrl={v.apiUrl}
            />
          ))}
        </div>
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
