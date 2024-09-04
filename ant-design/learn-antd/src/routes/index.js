import LayoutDefault from "../layout/LayoutDefault";

import Dashboard from "../pages/Dashboard";
import BookRoom from "../pages/BookRoom";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/book-room",
        element: <BookRoom />
      },
    ]
  }
]