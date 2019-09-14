import React, { useState } from "react";
import { scores, differentials } from "../scoresJSON";
import FormDialog from "./FormDialog";
import ScoresTable from "./ScoresTable";
import Handicap from "./Handicap";
import uuid from "uuid/v4";

function MainContent() {
  const [state, setState] = useState({
    scores,
    differentials
  });

  class GolfScore {
    constructor(id, course, score, rating, slope) {
      this.id = id;
      this.course = course;
      this.score = score;
      this.rating = rating;
      this.slope = slope;
      this.differential = ((this.score - this.rating) * 113) / this.slope;
    }
  }

  const addScore = (id, course, score, rating, slope) => {
    const s = new GolfScore(uuid(), course, score, rating, slope);
    setState(state => ({
      scores: [...state.scores, s],
      differentials: [...state.differentials, s.differential]
    }));
  };

  return (
    <>
      <FormDialog addScore={addScore} />
      <Handicap diffs={state.differentials} />
      <ScoresTable scores={state.scores} />
    </>
  );
}

export default MainContent;
