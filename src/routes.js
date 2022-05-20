import { lazy } from "react";
import {
  INDEX_PATH, USER_PATH,
} from "./constants/UriPath";
import PublicLayout from "./layouts/PublicLayout";

const HomeContainer = lazy(() => import("./containers/HomeContainer"));
const UserContainer = lazy(() => import("./containers/UserContainer"));

const NotFoundContainer = lazy(() => import("./containers/NotFoundContainer"));

export const routes = [
 
  {
    path: INDEX_PATH,
    layout: PublicLayout,
    container: HomeContainer,
  },
  {
    path: `${USER_PATH}/:name`,
    layout: PublicLayout,
    container: UserContainer,
  },
  {
    path: "*",
    layout: PublicLayout,
    container: NotFoundContainer,
  },
];
