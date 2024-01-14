import React from "react";

const Button = ({ styles, text, onClick }) => (

  <a onClick={onClick} href={!text && "#booking"} type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-dimWhite bg-black-gradient rounded-[10px] outline-none ${styles}`}>
    {text ? text : "Get Started"}
  </a>
);

export default Button;
