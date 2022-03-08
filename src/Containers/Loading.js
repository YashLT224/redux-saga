import { connect, useSelector } from "react-redux";

let Loading = ({}) => {
  const { loading } = useSelector((state) => state.newsreducer);
  console.log(loading);
  return loading ? (
    <div style={{ textAlign: "center" }}>
      <h1>LOADING</h1>
    </div>
  ) : null;
};

export default Loading;
