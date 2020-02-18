import React from "react";
import Header from "../Header";

import GlobalStyles from "../../styles/global";

import { Container } from "./styles";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <main role="main">{children}</main>
      </Container>
    </>
  );
}
