import { lazy } from "react";
import {
  INDEX_PATH,
} from "./constants/UriPath";
import PublicLayout from "./layouts/PublicLayout";

const HomeContainer = lazy(() => import("./containers/HomeContainer"));
const NotFoundContainer = lazy(() => import("./containers/NotFoundContainer"));

export const routes = [
 
  {
    path: INDEX_PATH,
    layout: PublicLayout,
    container: HomeContainer,
  },
  {
    path: "*",
    layout: PublicLayout,
    container: NotFoundContainer,
  },
];
