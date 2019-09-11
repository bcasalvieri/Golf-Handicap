import React from "react";
import { scores, differentials } from "../scoresJSON"
import FormDialog from "./FormDialog";
import ScoresTable from "./ScoresTable";

function MainContent() {
  const [state, setState] = React.useState({
    scores,
    differentials
  });

  class GolfScore {
    constructor(course, score, rating, slope) {
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
      differentials: [...state.differentials, s.differential ]
    }))
  }

  const calculateHandicap = () => {
    const sortedDiffs = state.differentials.sort((a,b) => a - b);
    if (sortedDiffs.length < 7) {
      const score = sortedDiffs.slice(0, 1);
      const handicap = score * 0.96;
      const rounded = Math.round(handicap * 10) / 10;
      console.log(rounded);
    } else if (sortedDiffs.length >= 7 && sortedDiffs.length < 9) {
      const scores = sortedDiffs.slice(0, 2);
      const sumOfScores = scores.reduce((acc, next) => acc + next, 0);
      const handicap = (sumOfScores / scores.length) * 0.96;
      const rounded = Math.round(handicap * 10) / 10;
      console.log(rounded);
    } else if (sortedDiffs.length >= 9 && sortedDiffs.length < 11) {
      const scores = sortedDiffs.slice(0, 3);
      const sumOfScores = scores.reduce((acc, next) => acc + next, 0);
      const handicap = (sumOfScores / scores.length) * 0.96;
      const rounded = Math.round(handicap * 10) / 10;
      console.log(rounded);
    } else if (sortedDiffs.length >= 11 && sortedDiffs.length < 13) {
      const scores = sortedDiffs.slice(0, 4);
      const sumOfScores = scores.reduce((acc, next) => acc + next, 0);
      const handicap = (sumOfScores / scores.length) * 0.96;
      const rounded = Math.round(handicap * 10) / 10;
      console.log(rounded);
    } else if (sortedDiffs.length >= 13 && sortedDiffs.length < 15) {
      const scores = sortedDiffs.slice(0, 5);
      const sumOfScores = scores.reduce((acc, next) => acc + next, 0);
      const handicap = (sumOfScores / scores.length) * 0.96;
      const rounded = Math.round(handicap * 10) / 10;
      console.log(rounded);
    } else if (sortedDiffs.length >= 15 && sortedDiffs.length < 17) {
      const scores = sortedDiffs.slice(0, 6);
      const sumOfScores = scores.reduce((acc, next) => acc + next, 0);
      const handicap = (sumOfScores / scores.length) * 0.96;
      const rounded = Math.round(handicap * 10) / 10;
      console.log(rounded);
    } else if (sortedDiffs.length >= 17 && sortedDiffs.length < 19) {
      const scores = sortedDiffs.slice(0, 7);
      const sumOfScores = scores.reduce((acc, next) => acc + next, 0);
      const handicap = (sumOfScores / scores.length) * 0.96;
      const rounded = Math.round(handicap * 10) / 10;
      console.log(rounded);
    } else {
      const scores = sortedDiffs.slice(0, 8);
      const sumOfScores = scores.reduce((acc, next) => acc + next, 0);
      const handicap = (sumOfScores / scores.length) * 0.96;
      const rounded = Math.round(handicap * 10) / 10;
      console.log(rounded);
    };
  }

  return (
    <>
      <FormDialog addScore={addScore} />
      <ScoresTable scores={state.scores} />
    </>
  )
}

export default MainContent;

