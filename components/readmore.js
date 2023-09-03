import React, { useState } from "react";
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 80) : text}
      <span onClick={toggleReadMore} class="hover:underline font-semibold">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
export default ReadMore
  