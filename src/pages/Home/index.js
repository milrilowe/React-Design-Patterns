import React from "react";
import HomePage from "./HomePage";
import useLayout from "../../hooks/useLayout";

function HomePageContainer() {
  const HomePageWithSelectedLayout = useLayout(HomePage);

  return <HomePageWithSelectedLayout />;
}

export default () => useLayout(HomePage);