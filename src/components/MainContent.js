import React, { useState } from "react";
import { scores, differentials } from "../scoresJSON";
import FormDialog from "./FormDialog";
import ScoresTable from "./ScoresTable";
import Handicap from "./Handicap";
import uuid from "uuid/v4";

export default function MainContent() {
  const [state, setState] = useState({
    scores,
    differentials
  });

  class GolfScore {
    constructor(course, score, rating, slope) {
      this.id = uuid();
      this.course = course;
      this.score = score;
      this.rating = rating;
      this.slope = slope;
      this.differential = ((this.score - this.rating) * 113) / this.slope;
    }
  }

  const addScore = (course, score, rating, slope) => {
    const s = new GolfScore(course, score, rating, slope);
    setState(state => ({
      scores: [...state.scores, s],
      differentials: [...state.differentials, s.differential]
    }));
  };

  const deleteScore = id => {
    const newScores = state.scores.filter(score => score.id !== id);
    setState({scores: newScores});
  }

  return (
    <>
      <FormDialog addScore={addScore} />
      <Handicap diffs={state.differentials} />
      <ScoresTable scores={state.scores} delete={deleteScore} />
    </>
  );
}
