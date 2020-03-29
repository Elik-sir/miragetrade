import React from "react";
import Picture from "./picture";
import Directory from "../../components/directory/directory";

const HomePage = () => (
  <div className="HomePage">
    <Picture />
    {<Directory />}
  </div>
);

export default HomePage;
