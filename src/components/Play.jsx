import React, { useEffect } from "react";
import Header from "./Header";
import { useContext, useState } from "react";
import { GeneralContext } from "../context/Context";
import Categories from "./extraComponents/Category";
export default function Play() {
  const { allQuestions, setSelectedQ } = useContext(GeneralContext);
 
  return (
    <div>
      <Header />
      <Categories/>
    </div>
  );
}
