export const getNews = (data) => ({
  type: "GET_NEWS",
  data: data,
  vaL: 4,
});

export const directUpdate = (data) => ({
  type: "DIRECT_UPDATE",
  payload: data,
});
