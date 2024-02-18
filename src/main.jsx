import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DirectionProvider, MantineProvider } from "@mantine/core";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@utils/queries.js";
import { theme } from "@utils/theme.js";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DirectionProvider initialDirection="rtl">
        <MantineProvider theme={theme}>
          <App />
          <Toaster />
        </MantineProvider>
      </DirectionProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
