import { get_article, get_section, search_news } from "./api";

export const fetchNews = (orderBy, callback) => {
  fetch(get_section("news", 8, orderBy))
    .then((res) => res.json())
    .then((data) => callback(data.response.results, null))
    .catch((err) => callback(null, err));
};

export const fetchSport = (orderBy, callback) => {
  fetch(get_section("sport", 3, orderBy))
    .then((res) => res.json())
    .then((data) => callback(data.response.results, null))
    .catch((err) => callback(null, err));
};

export const fetchArticle = (articleUrl, callback) => {
  fetch(get_article(articleUrl))
    .then((res) => res.json())
    .then((data) => callback(data.response.content, null))
    .catch((err) => callback(null, err));
};

export const fetchSearchNews = (keyword, orderBy, page, callback) => {
  fetch(search_news(keyword, 15, orderBy, page))
    .then((res) => res.json())
    .then((data) => callback(data.response.results, null))
    .catch((err) => callback(null, err));
};
