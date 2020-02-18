import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

export default function pages({ data }) {
  return (
    <Layout>
      <strong>{data.site.siteMetadata.title} 🚀</strong>
      <p>{data.site.siteMetadata.description}</p>
    </Layout>
  );
}

export const query = graphql`
  query SiteDefaultQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
