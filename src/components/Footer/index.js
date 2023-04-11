import React from "react";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FooterNav } from "./styled";

export default function Footer() {
  return (
    <FooterNav>
      <div>
        <h4>Website criado por Anthony Deleon</h4>
        <div>
          <a href="https://www.linkedin.com/in/anthnydeleon/" className="redes">
            <FaLinkedin size={25} />
            LinkedIn
          </a>
          <a href="https://github.com/anthnydeleon" className="redes">
            <FaGithub size={25} />
            LinkedIn
          </a>
        </div>
      </div>
    </FooterNav>
  );
}
