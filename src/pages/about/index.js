import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Container } from "./styles";

export default function About() {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      <h1>{data.site.siteMetadata.title}</h1>
    </Container>
  );
}
