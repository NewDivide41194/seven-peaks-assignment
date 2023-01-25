import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/Logo_White.png";
import { changeText } from "../features/appSlice";

export const Card = ({
  imgUrl,
  title,
  body,
  normal,
  articleUrl,
  titleCard,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const _handleCardClick = (articleUrl) => {
    localStorage.setItem("articleUrl", articleUrl);
    dispatch(changeText(""));
    navigate("/article");
  };

  return titleCard ? (
    <Title_Card
      title={title}
      _handleCardClick={() => _handleCardClick(articleUrl)}
    />
  ) : (
    <Image_Title_Card
      imgUrl={imgUrl}
      title={title}
      body={body}
      normal={normal}
      _handleCardClick={() => _handleCardClick(articleUrl)}
    />
  );
};

export const Title_Card = ({ title, _handleCardClick }) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return (
    <div
      className="text-only-card cursor-pointer"
      style={{ borderBottom: `4px solid #${randomColor}` }}
      onClick={() => _handleCardClick()}
    >
      <div className="text-block">
        <div className="card-title">{title}</div>
      </div>
    </div>
  );
};

const Image_Title_Card = ({
  imgUrl,
  title,
  body,
  normal,
  _handleCardClick,
}) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return (
    <div
      className={normal ? "cursor-pointer" : "grid-item cursor-pointer"}
      style={{
        position: "relative",
        minHeight: "250px",
        backgroundImage: `url(${imgUrl || Logo})`,
        backgroundColor: "#1e2e79",
        backgroundSize: imgUrl ? "cover" : "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        boxShadow: "1px 2px 20px #999",
        borderBottom: `4px solid #${randomColor}`,
      }}
      onClick={() => _handleCardClick()}
    >
      <div className="text-block">
        <div className="card-title">{title}</div>
        <div className="card-body">{body}</div>
      </div>
    </div>
  );
};

