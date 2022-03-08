import React from "react";
import { connect } from "react-redux";
import { getNews, directUpdate } from "../redux/actions/a.action";
import { useDispatch, useSelector } from "react-redux";
let Button = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(directUpdate(22))}>Sync call</button>
      <button onClick={() => dispatch(getNews(12))}>Async call</button>
    </>
  );
};
// const mapDispatchToProps = {
//   getNews: getNews,
// };
// Button = connect(null, mapDispatchToProps)(Button);
export default Button;
