import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "genre",
    element: <Genre />,
  },
  {
    path: "movies",
    element: <Movies />
    children: [
      {
        path: "castandcrew",
        element: <Castandcrew />,
      },
      {
        path: "reserve",
        element: <Reserve />,
      },
      {
        path: "movies/:moviesId",
        element: <MovieId />,
      },
    ]
  },
  {
    path: "bookmark",
    element: <Bookmark />
  },
  {
    path: "login",
    element: <Login />
  },
  

]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <h1 className="text-3xl font-bold underline">Welcome to the Midterm</h1>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
