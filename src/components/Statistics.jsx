import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";

export default function Statistics() {
  const loginName = useSelector((state) => state.login);
  console.log(loginName);
  return (
    <>
      <Header />
      <div>
        <h2>{loginName}</h2>
      </div>
    </>
  );
}
