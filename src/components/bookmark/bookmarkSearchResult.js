import React from "react";
import { useSelector } from "react-redux";
import { MenuBar } from "../../app/menuBar";
import { Card } from "../../assets/card";

const BookmarkSearchResult = () => {
  const { searchText, bookmark } = useSelector((state) => state.app);

  const filteredBookmark = bookmark.filter((data) => {
    return data.webTitle.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div>
      <MenuBar className="title" noViewBookmark noDropDown title={"BOOKMARK SEARCH RESULT"}/>
     {bookmark.length>0? <div className="grid-container">
        {filteredBookmark.map((v, k) => (
          <Card
            key={k}
            normal
            title={v.webTitle}
            imgUrl={v.fields?.thumbnail}
            articleUrl={v.apiUrl}
          />
        ))}
      </div>:<NoData/>}
    </div>
  );
};

const NoData = () => {
  return <div className="card-title alert-text-container">No Bookmark!</div>;
};

export default BookmarkSearchResult;
