import React from "react";
import MenuItem from "../menu-item/menu-item";
import "./directory.scss";
const sections = [
  {
    title: "pistols",
    imageUrl:
      "https://steamuserimages-a.akamaihd.net/ugc/87096697214060189/3E6A0CF1D4719B05892FA691F9676D030B4C8ADD/",
    id: 1,
    linkUrl: "shop/pistols",
  },
  {
    title: "heavy",
    imageUrl:
      "https://i.pinimg.com/originals/17/19/9d/17199d6ee954fa0e547079db1a2d1899.jpg",
    id: 2,
    linkUrl: "shop/heavy",
  },
  {
    title: "SMG",
    imageUrl:
      "https://steamuserimages-a.akamaihd.net/ugc/487892961314485984/DAD8754571924E9BB2CF4FA0D219A80D2872F63D/",
    id: 3,
    linkUrl: "shop/smg",
  },
  {
    title: "rifles",
    imageUrl: "https://i.playground.ru/p/d_fqtv63kC3g7dX1gfjKKA.jpeg",
    size: "large",
    id: 4,
    linkUrl: "shop/rifles",
  },
  {
    title: "knifes",
    imageUrl: "https://i.ytimg.com/vi/Vcql0BFqmWI/maxresdefault.jpg",
    size: "large",
    id: 5,
    linkUrl: "shop/knifes",
  },
];
const Directory = () => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionsProps }) => (
      <MenuItem key={id} {...otherSectionsProps} />
    ))}
  </div>
);

export default Directory;
