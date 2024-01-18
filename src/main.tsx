import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";

import { CheckoutContextProvider } from "./contexts/checkout-context.tsx";
import { ProductFilteringContextProvider } from "./contexts/product-filtering-context.tsx";
import { StoreProgressContextProvider } from "./contexts/store-progress.tsx";
import router from "./routes/routes.tsx";

const queryCient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryCient}>
      <ProductFilteringContextProvider>
        <CheckoutContextProvider>
          <StoreProgressContextProvider>
            <RouterProvider router={router} />
            <ReactQueryDevtools />
          </StoreProgressContextProvider>
        </CheckoutContextProvider>
      </ProductFilteringContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
