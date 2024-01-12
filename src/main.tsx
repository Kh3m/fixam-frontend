import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import router from "./routes/routes.tsx";
import { StoreProgressContextProvider } from "./contexts/store-progress.tsx";
import { CheckoutContextProvider } from "./contexts/checkout-context.tsx";

const queryCient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryCient}>
      <CheckoutContextProvider>
        <StoreProgressContextProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </StoreProgressContextProvider>
      </CheckoutContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
