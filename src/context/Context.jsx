import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {
  let [allQuestions, setAllQuestions] = useState([]);
  const callApi = async () => {
    try {
      const response = await axios.get("https://jservice.io/api/clues");
      //   console.log(response.data);
      setAllQuestions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callApi();
  }, []);
  const data = {
    allQuestions,
  };
  return (
    <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>
  );
};
export default GeneralProvider;
