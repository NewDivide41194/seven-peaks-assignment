import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/Logo_White.png";
import SearchIcon from "../assets/images/search-icon@2x.svg";
import { changeSearchType, changeText } from "../features/appSlice";

const NavBar = () => {
  const [isSearch, setIsSearch] = useState(false);
  const { searchText, searchType } = useSelector((state) => state.app);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const textInput = useRef();

  const _handleSearch = () => {
    setIsSearch(!isSearch);
  };

  useEffect(() => {
    if (isSearch) {
      textInput.current.focus();
    }
  }, [isSearch]);

  const _handleHomeClick = () => {
    dispatch(changeText(""));
    dispatch(changeSearchType("all"));

    localStorage.removeItem("articleUrl");
    navigate("/home");
  };

  return (
    <div className="nav">
      <div className="container">
        <img
          src={Logo}
          alt="logo"
          className="logo cursor-pointer"
          onClick={() => _handleHomeClick()}
        />
        <div
          style={{
            borderBottom: "2px solid white",
            padding: isSearch ? "0px" : "0px 20px",
            alignSelf: "end",
            width: isSearch ? "270px" : "20px",
            transition: "width 1s",
            position: "relative",
          }}
        >
          {isSearch && (
            <input
              ref={textInput}
              className="input-search"
              placeholder={
                searchType === "all" ? "Search all news" : "Search Bookmark"
              }
              value={searchText}
              onBlur={() => _handleSearch()}
              onChange={(e) => dispatch(changeText(e.target.value))}
            />
          )}
          <img
            style={{ position: "absolute", top: isSearch ? 8 : -27, right: 20 }}
            src={SearchIcon}
            alt="search_icon"
            className="cursor-pointer"
            onClick={() => _handleSearch()}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
