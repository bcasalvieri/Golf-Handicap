import React, { useState, useEffect, useContext } from "react";
import { ScoresContext } from "../contexts/ScoresContext";

export default function Handicap(props) {
  const [handicap, setHandicap] = useState(0);
  const scores = useContext(ScoresContext);
  const diffs = scores.reduce((acc, next) => {
    acc.push(next.differential);
    return acc;
  }, []);
  const sortedDiffs = diffs.sort((a, b) => a - b);

  useEffect(() => {
    if (sortedDiffs.length < 7) {
      const score = sortedDiffs.slice(0, 1);
      setHandicap(Math.round(score * 0.96 * 10) / 10);
    } else if (sortedDiffs.length >= 7 && sortedDiffs.length < 9) {
      const scores = sortedDiffs.slice(0, 2);
      const sumOfScores = scores.reduce((acc, next) => acc + next, 0);
      setHandicap(Math.round((sumOfScores / scores.length) * 0.96 * 10) / 10);
    } else if (sortedDiffs.length >= 9 && sortedDiffs.length < 11) {
      const scores = sortedDiffs.slice(0, 3);
      const sumOfScores = scores.reduce((acc, next) => acc + next, 0);
      setHandicap(Math.round((sumOfScores / scores.length) * 0.96 * 10) / 10);
    } else if (sortedDiffs.length >= 11 && sortedDiffs.length < 13) {
      const scores = sortedDiffs.slice(0, 4);
      const sumOfScores = scores.reduce((acc, next) => acc + next, 0);
      setHandicap(Math.round((sumOfScores / scores.length) * 0.96 * 10) / 10);
    } else if (sortedDiffs.length >= 13 && sortedDiffs.length < 15) {
      const scores = sortedDiffs.slice(0, 5);
      const sumOfScores = scores.reduce((acc, next) => acc + next, 0);
      setHandicap(Math.round((sumOfScores / scores.length) * 0.96 * 10) / 10);
    } else if (sortedDiffs.length >= 15 && sortedDiffs.length < 17) {
      const scores = sortedDiffs.slice(0, 6);
      const sumOfScores = scores.reduce((acc, next) => acc + next, 0);
      setHandicap(Math.round((sumOfScores / scores.length) * 0.96 * 10) / 10);
    } else if (sortedDiffs.length >= 17 && sortedDiffs.length < 19) {
      const scores = sortedDiffs.slice(0, 7);
      const sumOfScores = scores.reduce((acc, next) => acc + next, 0);
      setHandicap(Math.round((sumOfScores / scores.length) * 0.96 * 10) / 10);
    } else {
      const scores = sortedDiffs.slice(0, 8);
      const sumOfScores = scores.reduce((acc, next) => acc + next, 0);
      setHandicap(Math.round((sumOfScores / scores.length) * 0.96 * 10) / 10);
    }
  }, [sortedDiffs]);

  return <h2>Your current handicap: {handicap}</h2>;
}
