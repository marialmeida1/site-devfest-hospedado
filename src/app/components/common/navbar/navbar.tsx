import React from 'react';
import './navbar.css';

export const Navbar = () => {
  return (
    <nav id='nav-header'>
        <ul id='header-links'>
            <li><a href="/">Home</a></li>
            <li><a href="../../about">Sobre</a></li>
            <li><a href="../../schedule">Programação</a></li>
            <li><a href="../../bh">Conheça BH</a></li>
            <li><a href="../../organizers">Organizadores</a></li>
        </ul>
    </nav>
  );
}