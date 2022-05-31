import React, { useState } from "react";
import Header from "../Header";

export default function Info() {
  const [firstQuestion, setFirstQuestion] = useState(false);
  const [secondQuestion, setSecondQuestion] = useState(false);
  const [thirdQuestion, setThirdQuestion] = useState(false);

  return (
    <>
      <Header />
      <div
        style={{
          backgroundColor: "#136998",
          height: "95vh",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p className="infoText">
          Jeopardy! was born March 30, 1964, when the first-ever episode aired
          at 11:30 a.m. on NBC. The birth parents were Merv and Julann Griffin
          and attending was Art Fleming. The NBC daytime version of the show
          (which ran until 1975) paved the way for the current syndicated
          program that debuted in 1984. As part of an annual tradition started
          in 2022, we celebrate JeoparDAY! on March 30 and encourage everyone to
          celebrate with us. – Michael Davies, Executive Producer
        </p>
        <div className="infoPart">
          <p className="infoFAQ">Frequently Asked Questions</p>
          <article className="question">
            <header
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <h4>WHAT IS THE JEOPARDY! ANYTIME TEST?</h4>
              <button
                className="btn"
                onClick={() => setFirstQuestion(!firstQuestion)}
              >
                {firstQuestion ? <h3>-</h3> : <h3>+</h3>}
              </button>
            </header>
            {firstQuestion && (
              <p>
                The Jeopardy! Anytime Test is the first step for anyone who
                wants to compete on Jeopardy! Passing the 50-question test is
                the first round of qualification to getting on the show. Plus,
                it’s a lot of fun!
              </p>
            )}
          </article>
          <article className="question">
            <header
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <h4>
                I’VE SUBMITTED AN ANYTIME TEST IN THE LAST 12 MONTHS. CAN I
                STILL TAKE THE TEST ON JEOPARDAY!?
              </h4>
              <button
                className="btn"
                onClick={() => setSecondQuestion(!secondQuestion)}
              >
                {secondQuestion ? <h3>-</h3> : <h3>+</h3>}
              </button>
            </header>
            {secondQuestion && (
              <p>
               Normally, you are able to submit one Anytime Test per one-year period. But in celebration of JeoparDAY!, you will be allowed to take the test on March 30 regardless of when you last took the test. Taking the test on JeoparDAY! will not count towards the one year cycle of eligibility. For example, if you took the test on December 1, 2021 and then again on March 30, 2022 (JeoparDAY!), the next time you would be able to take the test would be on December 1, 2022. . It’s an extra chance to give it your best shot!
              </p>
            )}
          </article>
          <article className="question">
            <header
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <h4>
              AM I ELIGIBLE TO TAKE THE ANYTIME TEST ON JEOPARDAY! IF I HAVE STARTED THE JEOPARDY! CONTESTANT INTERVIEW PROCESS?
              </h4>
              <button
                className="btn"
                onClick={() => setThirdQuestion(!thirdQuestion)}
              >
                {thirdQuestion ? <h3>-</h3> : <h3>+</h3>}
              </button>
            </header>
            {thirdQuestion && (
              <p>
               You will be allowed to take the Anytime Test on JeoparDAY!...for fun! However, your score will not affect your eligibility for getting on the show.
              </p>
            )}
          </article>
        </div>
      </div>
    </>
  );
}
// WHAT IS THE JEOPARDY! ANYTIME TEST?
//The Jeopardy! Anytime Test is the first step for anyone who wants to compete on Jeopardy! Passing the 50-question test is the first round of qualification to getting on the show. Plus, it’s a lot of fun!

//I’VE SUBMITTED AN ANYTIME TEST IN THE LAST 12 MONTHS. CAN I STILL TAKE THE TEST ON JEOPARDAY!?
//Normally, you are able to submit one Anytime Test per one-year period. But in celebration of JeoparDAY!, you will be allowed to take the test on March 30 regardless of when you last took the test. Taking the test on JeoparDAY! will not count towards the one year cycle of eligibility. For example, if you took the test on December 1, 2021 and then again on March 30, 2022 (JeoparDAY!), the next time you would be able to take the test would be on December 1, 2022. . It’s an extra chance to give it your best shot!

//AM I ELIGIBLE TO TAKE THE ANYTIME TEST ON JEOPARDAY! IF I HAVE STARTED THE JEOPARDY! CONTESTANT INTERVIEW PROCESS?
//You will be allowed to take the Anytime Test on JeoparDAY!...for fun! However, your score will not affect your eligibility for getting on the show.
