const key = process.env.REACT_APP_GUARDIAN_API_KEY;
const baseUrl = process.env.REACT_APP_GUARDIAN_BASE_URL;

export const get_section = (section, pageSize, orderBy) =>
  baseUrl +
  `search?section=${section}&page-size=${pageSize}&order-by=${orderBy}&show-blocks=body&show-fields=thumbnail&api-key=${key}`;

export const search_news = (keyword, pageSize, orderBy, page) =>
  baseUrl +
  `search?q=${keyword}&page-size=${pageSize}&page=${page}&show-fields=thumbnail&order-by=${orderBy}&api-key=${key}`;

export const get_article = (url) => `${url}?show-fields=thumbnail&show-blocks=body&api-key=${key}`;
