import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-slate-gray" : ""}
    transition duration-500 hover:text-slate-60`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      <h3 className="basis-1/5 font-montserrat text-base font-semibold">
        {page}
      </h3>
    </AnchorLink>
  );
};

export default Link;
