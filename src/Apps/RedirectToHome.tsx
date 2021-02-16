import * as React from "react";
import { useLocation, useHistory } from "react-router-dom";

export const RedirectToHome = () => {
  const history = useHistory();
  const location = useLocation();
  React.useEffect(() => {
    if (location?.pathname === "/my-hooks" || location?.pathname === "/") {
      history.push("/home");
    }
  }, [location]);
  return <></>;
};
