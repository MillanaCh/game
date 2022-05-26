import React from "react";
import Header from "./Header";
export default function Info() {
  return (
    <>
      <Header />
      <div>
        <p className="info">
          JeopardyLabs was created by me, Matt Johnson, while working on my
          undergrad at Washington State University, Vancouver. JeopardyLabs
          makes it easy to create jeopardy templates without PowerPoint. Give it
          a try, you'll probably like it a lot. JeopardyLabs is not affiliated
          with Jeopardy!® or Sony Pictures Digital Inc.
        </p>
        Frequently Asked Questions
      </div>
    </>
  );
}
