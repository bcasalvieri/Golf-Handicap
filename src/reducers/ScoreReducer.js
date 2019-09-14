import uuid from "uuid/v4";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: uuid(),
          course: action.course,
          score: action.score,
          rating: action.rating,
          slope: action.slope
        }
      ];
    case "REMOVE":
      return state.filter(score => score.id !== action.id);
    case "EDIT":
      return state.map(score =>
        score.id === action.id
          ? {
              ...score,
              course: action.newCourse,
              score: action.newScore,
              rating: action.newRating,
              slope: action.newSlope
            }
          : score
      );
    default:
      return state;
  }
};

export default reducer;
