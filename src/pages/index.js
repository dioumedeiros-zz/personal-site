import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

import ProfileImg from "../assets/profile.png";

export default function pages({ data }) {
  return (
    <Layout>
      <main>
        <section>
          <img src={ProfileImg} alt="Foto de perfil" />
        </section>
        <strong>{data.site.siteMetadata.title} 🚀</strong>
        <p>{data.site.siteMetadata.description}</p>
      </main>
      <footer>
        <a href="https://github.com/dioumedeiros" target="_blank">
          <FaGithub size={30} color="#fff" />
        </a>
        <a href="https://www.linkedin.com/in/dionatanmedeiros/" target="_blank">
          <FaLinkedin size={30} color="#fff" />
        </a>
        <a
          href="https://twitter.com/DiouMedeiros"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={30} color="#fff" />
        </a>
      </footer>
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
