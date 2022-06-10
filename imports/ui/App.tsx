import * as React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useTracker } from "meteor/react-meteor-data";
import { TakePollPage } from "./TakePollPage";

const ProtectedPage = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const userId = useTracker(() => Meteor.userId());
  if (!userId) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

const protect = (child: JSX.Element) => {
  return <ProtectedPage>{child}</ProtectedPage>;
};

export const App = (): JSX.Element => {
  return <TakePollPage />;
};
