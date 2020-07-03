import * as React from "react";
import GridItem from "./GridItem";

export default function Grid() {
  return (
    <div>
      {new Array(6).fill(null).map((_, row) => (
        <div key={row}>
          {new Array(6).fill(null).map((_, cell) => (
            <GridItem key={cell} />
          ))}
        </div>
      ))}
    </div>
  );
}
