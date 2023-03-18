import React from "react";
import {render} from "@testing-library/react";
import App from "./App";

// eslint-disable-next-line jest/expect-expect -- Pending on tests
test("render App", () => {
  render(<App />);
});
