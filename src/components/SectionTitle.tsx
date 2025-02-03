import React from "react";

const SectionTitle = ({ text }: { text: string }) => {
  return (
      <p className=" capitalize text-3xl font-bold "> {text} </p>
  );
};

export default SectionTitle;
