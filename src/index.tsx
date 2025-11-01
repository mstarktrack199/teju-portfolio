import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FrameFinal } from "./screens/FrameFinal";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <FrameFinal />
  </StrictMode>,
);
