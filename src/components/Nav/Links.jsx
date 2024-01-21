import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const Links = () => {
  const links = ["home", "about", "services", "meet the team", "contact"];
  const [linksVisibility, setLinksVisibility] = useState(false);
  const { pathname } = useLocation();

  const toggleVisibility = () => {
    setLinksVisibility(!linksVisibility);
  };

  return (
    <>
      <div className="links__button hide__button">
        <button className="btn menu" onClick={toggleVisibility}>
          <RiMenu3Line />
        </button>
      </div>
      <div
        className={`links ${!linksVisibility ? "hide__links" : ""}`}
      >
        {links.map((link, index) => {
          const generatedLink = `/${link.toLowerCase().replace(/\s/g, "-")}`;
          console.log("Generated Link:", generatedLink);
          return (
            <Link
              key={index}
              to={generatedLink}
              className={pathname === generatedLink ? "active" : ""}
              onClick={toggleVisibility}
            >
              {link}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Links;
