import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Root from "./root/root.jsx";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <Root />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);
