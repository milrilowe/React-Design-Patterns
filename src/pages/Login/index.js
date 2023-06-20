import React from "react";
import LoginPage from "./LoginPage";
import useLayout from "../../hooks/useLayout";

function LoginPageContainer() {
  const LoginPageWithSelectedLayout = useLayout(LoginPage);

  return <LoginPageWithSelectedLayout />;
}

export default () => useLayout(LoginPage);