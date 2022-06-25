//the state in (state, action)is always going to be posts thats why we change it to posts
const Reducer = (posts = [], action) => {
  switch (action.type) {
    case "FETCH ALL": // switch statement because we have multiple statements
      return action.payload;
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};
 export default Reducer;