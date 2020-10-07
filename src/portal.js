import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import Loader from "./components/Loader";

const ChangerPasswordModal = lazy(() =>
  import("./pages/Admin/Account/change-password")
);

const Main = () => {
  const ChangerPassword = () => create(<ChangerPasswordModal />);

  return (
    <Suspense fallback={<Loader />}>
      <ChangerPassword />
    </Suspense>
  );
};

const create = (Component) =>
  ReactDOM.createPortal(Component, document.getElementById("modal"));

export default Main;
