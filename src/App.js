import React, { useCallback, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { connect } from "react-redux";
import { getApp } from "./redux/selectors/CommonSelector";

function App() {

  const renderRoutes = useCallback((routes) => {
    let result = null;
    result = routes.map((route, i) => {
      let { path, layout: Layout, container: Component } = route;

      return (
        <Route
          key={i}
          path={path}
          element={
            <Suspense fallback={<Layout />}>
              <Component />
            </Suspense>
          }
        />
      );
    });
    return result;
  }, []);

  return (
    <HashRouter basename="/">
      <Routes>{renderRoutes(routes)}</Routes>
    </HashRouter>
  );
}

const mapStateToProps = (state) => {

  return {
    ...getApp(state),
  };
};

export default connect(mapStateToProps, {  })(App);