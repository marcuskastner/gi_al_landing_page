import React, { useState, useEffect } from "react";

const MenuItem = ({ itemName, link }) => {
  const [anchorTarget, setAnchorTarget] = useState(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(link));
  }, [link]);

  const handleClick = (event) => {
    event.preventDefault();
    anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <a
      href={`#${link}`}
      onClick={handleClick}
      ariaLabel={`Scroll to ${itemName}`}
    >
      {itemName}
    </a>
  );
};

export default MenuItem;
