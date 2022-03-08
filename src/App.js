import React from "react";
import Button from "./Containers/Button";
import NewsItem from "./Containers/NewsItem";
import Loading from "./Containers/Loading";
let App = () => (
  <div>
    <Button />
    <Loading />
    <NewsItem />
  </div>
);
export default App;
