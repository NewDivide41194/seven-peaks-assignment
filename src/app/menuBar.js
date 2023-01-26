import React from "react";
import BookMark from "../assets/images/bookmarkon-icon@2x.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeOrder, changeSearchType } from "../features/appSlice";
import { removeBookmark, addBookmark } from "../features/bookmarkSlice";

export const MenuBar = ({ noViewBookmark, title, noDropDown, button }) => {
  return (
    <div className="menu-bar">
      {title && <span className="title">{title}</span>}
      {noViewBookmark || <BookMarkButton />}
      {button && <AddBookMarkButton />}

      {noDropDown || <Dropdown />}
    </div>
  );
};

const options = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "relevance", label: "Most Popular" },
];

const Dropdown = () => {
  const dispatch = useDispatch();
  const selectedValue = useSelector((state) => state.app.orderBy);

  const _handleSelect = (e) => {
    dispatch(changeOrder(e.target.value));
  };

  return (
    <select
      className="select cursor-pointer"
      onChange={(e) => _handleSelect(e)}
      defaultValue={selectedValue}
    >
      {options.map((v, k) => (
        <option key={k} value={v.value}>
          {v.label}
        </option>
      ))}
    </select>
  );
};

const BookMarkButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const _handleVeiwBookmark = () => {
    dispatch(changeSearchType("bookmark"));
    navigate("/all-bookmarks");
  };

  return (
    <button
      className="button-bookmark cursor-pointer"
      onClick={() => _handleVeiwBookmark()}
    >
      <span>
        <img className="icon-bookmark" src={BookMark} alt="bookmark" />
        VIEW BOOKMARK
      </span>
    </button>
  );
};

const AddBookMarkButton = () => {
  const dispatch = useDispatch();
  const articleUrl = localStorage.getItem("articleUrl");
  const { articleObj } = useSelector((state) => state.article);
  const { bookmark } = useSelector((state) => state.bookmark);

  const isBookmark = bookmark?.some((v) => v.apiUrl === articleUrl);

  return isBookmark ? (
    <button
      className="button-bookmark cursor-pointer"
      onClick={() => dispatch(removeBookmark(articleUrl))}
    >
      <img className="icon-bookmark" src={BookMark} alt="bookmark" />
      <span>REMOVE BOOKMARK</span>
    </button>
  ) : (
    <button
      className="button-bookmark cursor-pointer"
      onClick={() => dispatch(addBookmark(articleObj))}
    >
      <img className="icon-bookmark" src={BookMark} alt="bookmark" />
      <span>ADD BOOKMARK</span>
    </button>
  );
};
