import React from "react";
import Header from "./Header";
import mainImg from "../images/img.png";
export default function MainPage() {
  return (
    <>
      <Header />
      <img src={mainImg} width="100%" />
    </>
  );
}
