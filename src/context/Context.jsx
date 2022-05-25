import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {
  let [allQuestions, setAllQuestions] = useState([]);
  let [valueNumbers, setValueNumbers] = useState({});

  //   Category Part
  const [categories, setCategories] = useState([]);

  const categoryList = [
    ...new Set(allQuestions.map((item) => item.category.title)),
  ];
  //   const values = allQuestions.map((item) => {
  //     if (item.category.title === "baseball") {
  //       setValues(...value, value[item.category.title] = Object.values(item.value));
  //     }
  //   });
  //   console.log(value, "values");

  let filtered = allQuestions.filter((item) => item.category.title === "baseball");

  useEffect(() => {
    setValueNumbers(filtered);
  }, [categories]);

  console.log(filtered);

  let [selectedQ, setSelectedQ] = useState();
  const callApi = async () => {
    try {
      const response = await axios.get("https://jservice.io/api/clues");
      setAllQuestions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    setCategories(categoryList);
  }, [allQuestions]);

  const data = {
    allQuestions,
    setSelectedQ,
    categories,
    valueNumbers,
  };
  return (
    <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>
  );
};
export default GeneralProvider;
