import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { SelectSeat } from "./pages/SelectSeat";
import { Moviedetails } from "./pages/Moviedetails";
import { Cast } from "./pages/Cast";
import { SelectTime } from "./pages/SelectTime";
import { Ticket } from "./pages/Ticket";
import { Root } from "./pages/Root";
import { Genres } from "./pages/Genres";
import { Movies } from "./pages/Movies";
import { Bookmarks } from "./pages/Bookmarks";
import { Login } from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "genre",
    element: <Genres />,
  },
  {
    path: "movies",
    element: <Movies />,
    children: [
      {
        path: ":Moviedetails",
        element: <Moviedetails />,
        children: [
          {
            path: "cast",
            element: <Cast />,
          },
          {
            path: "select-time",
            element: <SelectTime />,
          },
          {
            path: "select-seat",
            element: <SelectSeat />
          },
          {
            path: "ticket",
            element: <Ticket />
          },
        ]
      },
    ]
  },
  {
    path: "bookmarks",
    element: <Bookmarks />
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
