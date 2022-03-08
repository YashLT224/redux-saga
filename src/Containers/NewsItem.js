import React from "react";

import { connect, useSelector } from "react-redux";

const imgStyle = {
  hight: "auto",
  width: "80%",
  border: "4px solid RebeccaPurple ",
  borderRadius: "5%",
};
const articleStyle = {
  width: "50%",
  margin: "0 auto",
  color: "olive",
};
let NewsItem = () => {
  const { news } = useSelector((state) => state.newsreducer);

  console.log(news === undefined);

  return news !== undefined ? (
    <div>
      <h1>{news.title}</h1>
      <img style={imgStyle} src={news.urlToImage} alt="" />
      <h4>{news.description}</h4>
      <a href={news.url} target="_blank">
        READ MORE
      </a>
    </div>
  ) : null;

  // return <div>{news !== undefined && <h1>{news.title}</h1>}</div>;
};

export default NewsItem;
