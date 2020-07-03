import * as React from "react";
import Button from "@material-ui/core/Button";

export default function() {
  const [value, setValue] = React.useState("_");
  return (
    <Button
      className="GridItem"
      onClick={() => {
        if (value === "_") {
          setValue("0");
        }
        if (value === "0") {
          setValue("1");
        }
        if (value === "1") {
          setValue("_");
        }
      }}
    >
      {value}
    </Button>
  );
}
