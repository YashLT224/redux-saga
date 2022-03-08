const defaultState = {
  loading: false,
  val: 0,
  d: 0,
  news: {},
};

export const newsreducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_NEWS":
      console.log(action);
      return { ...state, loading: true, val: action.val };
    case "NEWS_RECEIVED":
      return { ...state, news: action.json[0], loading: false };
    case "DIRECT_UPDATE":
      return { ...state, d: action.payload };
    default:
      return state;
  }
};
export default newsreducer;
