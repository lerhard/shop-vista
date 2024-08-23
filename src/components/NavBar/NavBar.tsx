import React from "react";
import './NavBar.css';
import Image from "next/image";

interface NavBarProps {
    logoSrc: string
}


export const NavBar: React.FC<NavBarProps> = ({logoSrc}) => {
    return <header className="primary__header">
        <a href="#">
            <Image src={logoSrc} alt="Amalur modas" width={1200} height={466}/>
        </a>
        <button className="navbar__toggle-mobile" role="button" aria-controls="primary-navigation">
            <Image className="navbar__toggle-mobile--close-icon" src={'/images/close-toggle-icon.svg'} alt="close mobile toggle" width={20} height={20} aria-hidden={true}/>
            <Image className="navbar__toggle-mobile--hamburguer-icon" src={'/images/hamburger-toggle-icon.svg'} alt="close mobile toggle" width={20} height={20} aria-hidden={true}/>
            <span className="hidden">Menu</span>
        </button>
        <nav id="primary-navigation" className="navbar">
            <ul aria-label="Primary" className="navbar__menu">
                <li><a href="#">Produtos</a></li>
                <li><a href="#">Sobre nós</a></li>
                <li><a href="#">Contatos</a></li>
            </ul>
        </nav>
    </header>;
}