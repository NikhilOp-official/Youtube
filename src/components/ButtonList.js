import React from "react";
import Button from "./Button";

const List = [
  "All",
  "Gaming",
  "Live",
  "Soccer",
  "Cricket",
  "Songs",
  "Cooking",
  "Trailer",
  "News",
  "Animated Films",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {List.map((list, index) => {
        return <Button name={list} key={index} />;
      })}
    </div>
  );
};

export default ButtonList;
