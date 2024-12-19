import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Router } from "./Router/Router";

const root = document.getElementById("root");
if (!root) {
  throw new Error("root not found");
}
const container = createRoot(root);

container.render(<RouterProvider router={Router} />);
