import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Statistics() {
  const loginName = useSelector((state) => state.login);
  return (
    <>
      <Header />
      {loginName ? (
        <div>
          <h2>{loginName}</h2>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
