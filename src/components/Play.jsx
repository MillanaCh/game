import React, { useEffect } from "react";
import Header from "./Header";
import { useState } from "react";
import Categories from "./extraComponents/Category";
import axios from "axios";
import * as actions from "../redux/actions/actions"
import { useSelector, useDispatch } from "react-redux";

export default function Play() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [valueNumbers, setValueNumbers] = useState({});
  const dispatch = useDispatch()


  //   fetch data
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

  //   Category Part
  const [categories, setCategories] = useState([]);
  const categoryList = [
    ...new Set(allQuestions.map((item) => item.category.title)),
  ];
  //   let newObj = {};
  //   let newNew = allQuestions.map(
  //     (el) => (newObj[el.category.title] = [el.value])
  //   );
  //   console.log(newObj);

  //   const values = allQuestions.map((item) => {
  //     if (item.category.title === "baseball") {
  //       setValues(...value, value[item.category.title] = Object.values(item.value));
  //     }
  //   });
  //   console.log(value, "values");

  let filtered = allQuestions.filter(
    (item) => item.category.title === categories
  );


  useEffect(() => {
    setValueNumbers(filtered);
  }, [categories]);

  //   console.log(filtered);
  //   console.log(categoryList)

  let [selectedQ, setSelectedQ] = useState();

  useEffect(() => {
    setCategories(categoryList);
  }, [allQuestions]);

  return (
    <div>
      <Header />
      <Categories />
    </div>
  );
}
