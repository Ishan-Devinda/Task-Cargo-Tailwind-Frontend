import React from "react";

const sizes = {
 
  xs: "text-xs font-normal",
  lg: "text-[15px] font-normal",
  s: "text-[13px] font-normal",
  "2xl": "text-[19px] font-normal",
  "3xl": "text-[57px] font-normal md:text-[49px] sm:text-[43px]",
  xl: "text-base font-normal",
  md: "text-sm font-normal",

};

const Text = ({ children, className = "",as, size="xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-black-900 font-inter ${className} ${ sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
