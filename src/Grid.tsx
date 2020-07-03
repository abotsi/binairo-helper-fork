import * as React from "react";
import GridItem from "./GridItem";
import { gridState } from "./state";

export default function Grid() {
  return (
    <div className="Grid">
      {gridState.map((_, cell) => (
        <GridItem key={cell} />
      ))}
    </div>
  );
}
