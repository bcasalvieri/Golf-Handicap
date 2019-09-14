import React, { createContext } from "react";
import LocalStorageReducer from "../reducers/LocalStorageReducer";
import ScoreReducer from "../reducers/ScoreReducer";
import { scores } from "../scoresJSON";

const defaultScores = scores;

export const ScoresContext = createContext();
export const DispatchContext = createContext();

export function ScoresProvider(props) {
  const [scores, dispatch] = LocalStorageReducer("scores", defaultScores, ScoreReducer);
  return (
    <ScoresContext.Provider value={scores}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </ScoresContext.Provider>
  );
}
