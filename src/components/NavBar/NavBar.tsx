'use client'

import React from "react";
import './NavBar.css';
import Image from "next/image";

interface NavBarProps {
    logoSrc: string
}


export const NavBar: React.FC<NavBarProps> = ({logoSrc}) => {
    return <div className="navbar">
            <div className="navbar__logo">
                <Image src={logoSrc} alt="logo" width={1200} height={466}/>
            </div>
        <div className="navbar__menu"></div>

    </div>;
}