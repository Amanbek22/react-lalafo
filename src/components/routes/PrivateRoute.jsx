import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();
  console.log(isAuth);
  useEffect(() => {
    if(!isAuth) {
      navigate("/login");
    }
  }, [isAuth])
  if (!isAuth) {
    return "";
  }
  return children;
}

export default PrivateRoute;
