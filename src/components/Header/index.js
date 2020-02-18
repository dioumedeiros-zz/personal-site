import React from "react";

import { Container, Content } from "./styles";

export default function Header({ title }) {
  return (
    <Container>
      <Content>
        <header className="header">
          <h1 className="header-title">{title}</h1>
        </header>
      </Content>
    </Container>
  );
}
