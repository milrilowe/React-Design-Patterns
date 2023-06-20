import React from "react";

const AlternateLayout = ({ children }) => {

  return (
    <div className="default-layout-wrapper">
      <header>Header</header>
      <main>{children}</main>
    </div>
  );
};

export default AlternateLayout;