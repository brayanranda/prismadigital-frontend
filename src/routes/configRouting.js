/* eslint-disable import/no-anonymous-default-export */
import Home from "../page/Home";
import List from "../page/List";

export default [
  {
    // path: "/:id",
    path: "/list",
    exact: true,
    page: List,
  },
  {
    path: "/",
    exact: true,
    page: Home,
  },
];
