import React from "react";
import "./footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faGlobe, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <nav id="nav-footer">
      <ul className="footer-links">
        <li>
          <p className="title">Devfest 2024:</p>
        </li>
        <li>
          <p>
            <FontAwesomeIcon icon={faClock} className="pr-2" />
            <b>Data: </b> 26 de outubro | 8:00 horas
          </p>
        </li>
        <li>
          <a className="devfest-location" href="https://www.google.com/maps/place/PUC+Minas+-+Unidade+Pra%C3%A7a+da+Liberdade/@-19.9332735,-43.9397233,17z/data=!3m1!4b1!4m6!3m5!1s0xa699dc57d681cf:0x897f2f71ae2c8900!8m2!3d-19.9332786!4d-43.9371484!16s%2Fg%2F1ptyh1cl7?entry=tts&g_ep=EgoyMDI0MDkwMi4xKgBIAVAD">
            <FontAwesomeIcon icon={faMapLocationDot} className="pr-2" />
            <b>Local: </b>Puc Minas Liberdade Av. Brasil, 2023 - Funcionários
          </a>
        </li>
        <li className="devfest-button">
          <a href="https://www.sympla.com.br/evento/devfest-belo-horizonte/2586443 ">Inscreva-se</a>
        </li>
      </ul>
      <ul className="footer-links">
        <li>
          <p className="title">Canais de Comunicação:</p>
        </li>
        <li className="channel-link">
          <a href="https://gdg.community.dev/gdg-belo-horizonte/">
            <FontAwesomeIcon icon={faGlobe} className="pr-3" />
            Página Oficial
          </a>
        </li>
        <li className="channel-link">
          <a href="https://www.linkedin.com/company/gdg-belo-horizonte/">
            <FontAwesomeIcon icon={faLinkedin} className="pr-3" />
            Linkedin
          </a>
        </li>
        <li className="channel-link">
          <a href="https://www.instagram.com/gdg_bh/">
            <FontAwesomeIcon icon={faInstagram} className="pr-3" />
            Instagram
          </a>
        </li>
        <li className="channel-link">
          <a href="https://www.youtube.com/@GDG_BH">
            <FontAwesomeIcon icon={faYoutube} className="pr-2" />
            Youtube
          </a>
        </li>
      </ul>
    </nav>
  );
};
